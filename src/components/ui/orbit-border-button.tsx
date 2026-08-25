// Orbit Border Button — Originkit
"use client"

import * as React from "react"
import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react"
import {
    useAnimate,
    useReducedMotion,
    type AnimationPlaybackControls,
    type Transition,
} from "framer-motion"

type BandWidths = { top: number; right: number; bottom: number; left: number }

const MAX_BAND_WIDTH = 30

const num = (v: any) => {
    const parsed = parseFloat(String(v ?? ""))
    return Number.isFinite(parsed) && parsed > 0
        ? Math.min(parsed, MAX_BAND_WIDTH)
        : 0
}

const bandWidthsOf = (b: any): BandWidths => {
    const fused = num(b?.borderWidth)
    return {
        top: b?.borderTopWidth !== undefined ? num(b.borderTopWidth) : fused,
        right:
            b?.borderRightWidth !== undefined ? num(b.borderRightWidth) : fused,
        bottom:
            b?.borderBottomWidth !== undefined
                ? num(b.borderBottomWidth)
                : fused,
        left: b?.borderLeftWidth !== undefined ? num(b.borderLeftWidth) : fused,
    }
}

const borderColorOf = (b: any): string => b?.borderColor ?? "transparent"

const BAND_MASK: React.CSSProperties = {
    maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
    maskClip: "border-box, content-box",
    maskComposite: "exclude",
    WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
    WebkitMaskClip: "border-box, content-box",
    WebkitMaskComposite: "xor",
} as React.CSSProperties

const radiusFromPercent = (w: number, h: number, pct: number) =>
    (Math.min(w, h) / 2) * (Math.max(0, Math.min(100, pct)) / 100)

const useIsoLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect

type Colors = {
    fill?: string
    textColor?: string
    hoverFill?: string
    hoverTextColor?: string
}

type BorderValue = {
    borderColor?: string
    borderStyle?: string
    borderWidth?: number
    borderTopWidth?: number
    borderRightWidth?: number
    borderBottomWidth?: number
    borderLeftWidth?: number
}

type StrokeValue = {
    color?: string
    size?: number
    speed?: number
    direction?: "cw" | "ccw"
    hoverFill?: number
}

type Props = {
    colors?: Colors
    label?: string
    font?: React.CSSProperties
    showText?: boolean
    padding?: string
    rounded?: number
    fill?: string
    textColor?: string
    addIcon?: boolean
    icon?: any
    gap?: number
    border?: BorderValue
    stroke?: StrokeValue
    spot?: StrokeValue
    hoverScale?: number
    link?: string
    transition?: Transition
    hoverTransition?: Transition
    newTab?: boolean
    style?: React.CSSProperties
    className?: string
}

const DEG_PER_UNIT = 36
const PRESS = 0.97
const ARC_VAR = "--comet-arc"
const SOLID_VAR = "--comet-solid"
const solidOf = (arcDeg: number) => (arcDeg * arcDeg) / 360
const GLOW_BLUR = 13
const CORE_OPACITY = 0.45

export function OrbitBorderButton(props: Props) {
    const {
        label = "ORBIT BORDER",
        font = {
            variant: "Regular",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: 600,
        } as React.CSSProperties,
        showText = true,
        padding = "14px 28px 14px 28px",
        rounded = 100,
        fill: fillProp,
        textColor: textColorProp,
        colors = {
            fill: "#004d40",
            textColor: "#FFFFFF",
        },
        border = {
            borderColor: "rgba(255,255,255,0.3)",
            borderStyle: "solid",
            borderWidth: 2,
        },
        stroke = {
            size: 30,
            color: "#00bfa5",
            speed: 50,
            direction: "ccw",
            hoverFill: 100,
        },
        spot,
        hoverScale = 104,
        link = "",
        transition = {
            type: "tween",
            duration: 0.4,
            delay: 0,
            ease: [0.44, 0, 0.56, 1],
        } as Transition,
        hoverTransition,
        newTab = false,
        style,
        className = "",
    } = props

    const fill = colors?.fill ?? fillProp ?? "#004d40"
    const textColor = colors?.textColor ?? textColorProp ?? "#FFFFFF"

    const {
        color: strokeColor = "#00bfa5",
        size: strokeSize = 30,
        speed: speedPct = 50,
        direction = "ccw",
        hoverFill = 100,
    } = stroke ?? spot ?? {}

    const speed = 3 * (Math.max(0, Math.min(100, Math.round(speedPct))) / 50)

    const Tag: any = link ? "a" : "button"
    const tagProps = {
        "aria-label": showText ? undefined : label || undefined,
        ...(link
            ? {
                  href: link,
                  target: newTab ? "_blank" : undefined,
                  rel: newTab ? "noopener noreferrer" : undefined,
              }
            : { type: "button" }),
    }

    const [scope, animate] = useAnimate()
    const buttonRef = useRef<HTMLElement>(null)
    const bandRef = useRef<HTMLDivElement>(null)
    const faceRef = useRef<HTMLDivElement>(null)
    const cometRef = useRef<HTMLDivElement>(null)
    const arcAnimRef = useRef<{ stop: () => void } | null>(null)
    const arcDegRef = useRef(0)
    const hovered = useRef(false)
    const reducedMotion = useReducedMotion()

    const hoverTo = Math.max(50, Math.min(150, Math.round(hoverScale))) / 100
    const band = bandWidthsOf(border)
    const bandPadding = `${band.top}px ${band.right}px ${band.bottom}px ${band.left}px`
    const hasBand = band.top + band.right + band.bottom + band.left > 0

    const idleArcDeg = (Math.max(0, Math.min(100, strokeSize)) / 100) * 360
    const fillArcDeg = (Math.max(0, Math.min(100, hoverFill)) / 100) * 360

    const degPerSecRef = useRef(0)
    useEffect(() => {
        degPerSecRef.current =
            Math.max(0, speed) * DEG_PER_UNIT * (direction === "cw" ? 1 : -1)
    }, [speed, direction])

    useEffect(() => {
        const target = hovered.current ? fillArcDeg : idleArcDeg
        arcDegRef.current = target
        const el = cometRef.current
        if (el) {
            el.style.setProperty(ARC_VAR, `${target}deg`)
            el.style.setProperty(SOLID_VAR, `${solidOf(target)}deg`)
        }
    }, [idleArcDeg, fillArcDeg, hasBand])

    const [side, setSide] = useState(0)
    useEffect(() => {
        const el = buttonRef.current
        if (!el) return
        const measure = () =>
            setSide(
                Math.ceil(
                    Math.hypot(el.offsetWidth, el.offsetHeight) * 1.02
                )
            )
        measure()
        const ro = new ResizeObserver(measure)
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    useIsoLayoutEffect(() => {
        const el = buttonRef.current
        if (!el) return
        const applyRadius = () => {
            const w = el.offsetWidth
            const h = el.offsetHeight
            if (!w || !h) return
            const radius = radiusFromPercent(w, h, rounded)
            el.style.borderRadius = `${radius}px`
            if (bandRef.current)
                bandRef.current.style.borderRadius = `${radius}px`
            if (faceRef.current) {
                const inset = (v: number) => Math.max(0, radius - v)
                const x = [
                    inset(band.left),
                    inset(band.right),
                    inset(band.right),
                    inset(band.left),
                ]
                const y = [
                    inset(band.top),
                    inset(band.top),
                    inset(band.bottom),
                    inset(band.bottom),
                ]
                faceRef.current.style.borderRadius = `${x
                    .map((v) => `${v}px`)
                    .join(" ")} / ${y.map((v) => `${v}px`).join(" ")}`
            }
        }
        applyRadius()
        const ro = new ResizeObserver(applyRadius)
        ro.observe(el)
        return () => ro.disconnect()
    }, [rounded, band.top, band.right, band.bottom, band.left])

    useEffect(() => {
        if (reducedMotion || !hasBand) return
        let raf = 0
        let last = 0
        let angle = 0
        const tick = (t: number) => {
            if (!last) last = t
            angle = (angle + (degPerSecRef.current * (t - last)) / 1000) % 360
            last = t
            const el = cometRef.current
            if (el) el.style.transform = `rotate(${angle}deg)`
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [reducedMotion, hasBand])

    const animateArc = useCallback(
        (targetDeg: number) => {
            arcAnimRef.current?.stop()
            if (reducedMotion) {
                arcDegRef.current = targetDeg
                const el = cometRef.current
                if (el) {
                    el.style.setProperty(ARC_VAR, `${targetDeg}deg`)
                    el.style.setProperty(SOLID_VAR, `${solidOf(targetDeg)}deg`)
                }
                return
            }
            const startDeg = arcDegRef.current
            const duration = 0.45
            const startTime = performance.now()
            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

            let running = true
            let rafId = 0

            const run = () => {
                if (!running) return
                const elapsed = (performance.now() - startTime) / 1000
                const t = Math.min(elapsed / duration, 1)
                arcDegRef.current = startDeg + (targetDeg - startDeg) * easeOut(t)
                const el = cometRef.current
                if (el) {
                    el.style.setProperty(ARC_VAR, `${arcDegRef.current}deg`)
                    el.style.setProperty(
                        SOLID_VAR,
                        `${solidOf(arcDegRef.current)}deg`
                    )
                }
                if (t < 1) {
                    rafId = requestAnimationFrame(run)
                }
            }

            rafId = requestAnimationFrame(run)
            arcAnimRef.current = {
                stop: () => {
                    running = false
                    cancelAnimationFrame(rafId)
                },
            }
        },
        [reducedMotion]
    )

    useEffect(() => () => arcAnimRef.current?.stop(), [])

    const scaleTo = (s: number) => {
        if (buttonRef.current)
            animate(
                buttonRef.current as HTMLElement,
                { scale: s } as any,
                (transition ?? hoverTransition) as any
            )
    }

    const onEnter = () => {
        hovered.current = true
        scaleTo(hoverTo)
        animateArc(fillArcDeg)
    }

    const onLeave = () => {
        hovered.current = false
        scaleTo(1)
        animateArc(idleArcDeg)
    }

    const ringLayer: React.CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: side,
        height: side,
        marginTop: -side / 2,
        marginLeft: -side / 2,
        pointerEvents: "none",
    }

    const arcVar = `var(${ARC_VAR}, ${idleArcDeg}deg)`
    const solidVar = `var(${SOLID_VAR}, ${solidOf(idleArcDeg)}deg)`

    const cometBackground =
        direction === "cw"
            ? `conic-gradient(from 0deg, rgba(0,0,0,0) 0deg, rgba(0,0,0,0) calc(360deg - ${arcVar}), ${strokeColor} calc(360deg - ${solidVar}), ${strokeColor} 360deg)`
            : `conic-gradient(from 0deg, ${strokeColor} 0deg, ${strokeColor} ${solidVar}, rgba(0,0,0,0) ${arcVar}, rgba(0,0,0,0) 360deg)`

    return (
        <div
            ref={scope}
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            onPointerDown={() => scaleTo((hovered.current ? hoverTo : 1) * PRESS)}
            onPointerUp={() => scaleTo(hovered.current ? hoverTo : 1)}
            className={className}
            style={{
                display: "inline-flex",
                minWidth: 80,
                minHeight: 40,
                position: "relative",
                ...style,
            }}
        >
            <Tag
                {...tagProps}
                ref={buttonRef}
                style={{
                    boxSizing: "border-box",
                    position: "relative",
                    flex: "1 1 auto",
                    padding: bandPadding,
                    border: "none",
                    background: hasBand ? borderColorOf(border) : "transparent",
                    cursor: "pointer",
                    userSelect: "none",
                    textDecoration: "none",
                }}
            >
                {hasBand && (
                    <div
                        ref={bandRef}
                        aria-hidden
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 0,
                            boxSizing: "border-box",
                            padding: bandPadding,
                            pointerEvents: "none",
                            ...BAND_MASK,
                        }}
                    >
                        <div
                            ref={cometRef}
                            style={{
                                ...ringLayer,
                                transformOrigin: "center",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: cometBackground,
                                    filter: `blur(${GLOW_BLUR}px)`,
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: cometBackground,
                                    opacity: CORE_OPACITY,
                                }}
                            />
                        </div>
                    </div>
                )}

                <div
                    ref={faceRef}
                    style={{
                        position: "relative",
                        zIndex: 1,
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0,
                        padding,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        background: fill,
                        color: textColor,
                        ...font,
                    }}
                >
                    {showText && <span>{label}</span>}
                </div>
            </Tag>
        </div>
    )
}

export default OrbitBorderButton;
