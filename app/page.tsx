"use client";

import { useState } from "react";

const slides = [
  {
    tag: "01 // INTRODUCTION",
    title: "Hardware Engineering Fundamentals",
    subtitle: "Bridging the physical world and digital computation through silicon and circuits.",
    overview:
      "Hardware engineering is the science and art of designing reliable, efficient physical electronic systems. It transforms real-world physics into deterministic digital logic.",
    points: [
      {
        title: "Physical Computing",
        desc: "Capturing analog physical signals (voltage, current, temperature) and converting them for microcontrollers.",
      },
      {
        title: "Rigorous Constraints",
        desc: "Balancing strict constraints: power budget (microwatts), thermal limits, form factor, and electromagnetic noise.",
      },
      {
        title: "Silicon to Firmware",
        desc: "Designing the PCB traces and component interfaces so low-level embedded software (C/Rust) can execute seamlessly.",
      },
    ],
    specKey: "DESIGN TOLERANCE",
    specVal: "±0.05 mm",
  },
  {
    tag: "02 // ARCHITECTURE",
    title: "The Embedded Hardware Stack",
    subtitle: "A modular view of how modern electronic systems are structured.",
    overview:
      "Every embedded device consists of four interdependent subsystems that ensure reliable real-time operation in harsh environments.",
    points: [
      {
        title: "Microcontroller / SoC",
        desc: "ARM Cortex-M (STM32) or ESP32 handling interrupts, registers, and timing-critical communication busses (I2C, SPI, UART).",
      },
      {
        title: "Analog Front-End (AFE)",
        desc: "Operational amplifiers, active low-pass filtering, and high-resolution SAR ADCs to condition noisy sensor signals.",
      },
      {
        title: "Power Delivery Network (PDN)",
        desc: "Li-ion / Solar PMU, synchronous buck-boost regulators, and ultra-low quiescent current LDOs (<1µA in deep sleep).",
      },
    ],
    specKey: "SLEEP CURRENT",
    specVal: "< 15 µA",
  },
  {
    tag: "03 // LIFECYCLE",
    title: "The Hardware Development Cycle",
    subtitle: "Iterative progression from schematic capture to fabrication and lab bring-up.",
    overview:
      "Unlike software, physical hardware has zero post-production edit capability. Verification at every step is paramount.",
    points: [
      {
        title: "1. Schematic Capture & SPICE",
        desc: "Component selection, calculating impedance matching, and running circuit simulations before laying copper.",
      },
      {
        title: "2. Multi-Layer PCB Layout",
        desc: "Controlled impedance routing, dedicated continuous ground planes to mitigate EMI, and DFM (Design for Manufacturing) clearance.",
      },
      {
        title: "3. Bring-Up & Lab Probing",
        desc: "Using digital storage oscilloscopes, logic analyzers, and thermal cameras to validate power rails and bus signal integrity.",
      },
    ],
    specKey: "LAYER STACKUP",
    specVal: "4-Layer FR-4",
  },
  {
    tag: "04 // REAL-WORLD SYSTEM",
    title: "Case Study: River Water Quality Telemetry Node",
    subtitle: "Industrial IoT edge node engineered for river monitoring (pH, Turbidity, Effluent).",
    overview:
      "A ruggedized remote field hardware node designed for long-term autonomous deployment near riverbanks and industrial tailing areas.",
    points: [
      {
        title: "Galvanic Isolation Subsystem",
        desc: "Optocouplers & isolated DC-DC converters preventing ground loops between the water probe and battery power.",
      },
      {
        title: "Sensor Front-End Integration",
        desc: "Ultra-high input impedance (>10¹² Ω) JFET amplifier for glass pH electrode and nephelometric 850nm optical turbidity module.",
      },
      {
        title: "Low-Power Long-Range RF",
        desc: "Sub-GHz LoRaWAN module transmitting telemetry packets over 10+ km with autonomous solar energy harvesting.",
      },
    ],
    specKey: "INGRESS PROTECTION",
    specVal: "IP68 Sealed",
  },
];

export default function HardwarePresentation() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col justify-between p-6 md:p-12 selection:bg-orange-500 selection:text-black">
      {/* Top Header */}
      <header className="flex items-center justify-between border-b border-zinc-800 pb-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-orange-500 rounded-sm shadow-[0_0_12px_rgba(249,115,22,0.8)] animate-pulse" />
          <span className="font-mono text-sm tracking-wider text-orange-500 font-bold">
            HARDWARE.ENG // BRIEFING
          </span>
        </div>
        <div className="font-mono text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded">
          REV 1.0.4 • 2026
        </div>
      </header>

      {/* Main Slide Content */}
      <main className="max-w-6xl mx-auto w-full my-auto py-8">
        {/* Progress Bar */}
        <div className="w-full bg-zinc-900 h-1 rounded-full mb-8 overflow-hidden border border-zinc-800">
          <div
            className="bg-orange-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Title & Key Metric */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block font-mono text-xs font-semibold text-orange-400 bg-orange-950/40 border border-orange-800/60 px-2.5 py-1 rounded tracking-widest">
              {slide.tag}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {slide.title}
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Hardware Spec Card */}
            <div className="p-5 rounded-xl bg-zinc-900/80 border border-orange-500/20 shadow-lg relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-orange-500/20 transition-all" />
              <div className="font-mono text-[11px] text-zinc-400 tracking-wider">
                KEY HARDWARE TARGET
              </div>
              <div className="text-2xl md:text-3xl font-black text-orange-500 font-mono mt-1">
                {slide.specVal}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">{slide.specKey}</div>
            </div>
          </div>

          {/* Right Column: Detailed Breakdown Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 text-sm leading-relaxed">
              {slide.overview}
            </div>

            <div className="grid gap-3">
              {slide.points.map((pt, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/90 hover:border-orange-500/50 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <h2 className="text-sm font-semibold text-white tracking-wide">
                      {pt.title}
                    </h2>
                  </div>
                  <p className="text-xs text-zinc-400 pl-3.5 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-zinc-800 pt-6 max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx
                  ? "w-8 bg-orange-500"
                  : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="font-mono text-xs text-zinc-400 ml-3">
            0{current + 1} / 0{slides.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
            disabled={current === 0}
            className="px-4 py-2 rounded-md font-mono text-xs border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            ← PREV
          </button>
          <button
            onClick={() => setCurrent((prev) => Math.min(slides.length - 1, prev + 1))}
            disabled={current === slides.length - 1}
            className="px-5 py-2 rounded-md font-mono text-xs font-semibold bg-orange-500 text-black hover:bg-orange-400 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            NEXT →
          </button>
        </div>
      </footer>
    </div>
  );
}