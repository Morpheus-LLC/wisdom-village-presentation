"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { TrendingUp, CheckCircle } from "lucide-react"
import { useState } from "react"

interface SlideData {
  id: number
  title: string
  type:
    | "title"
    | "content"
    | "image"
    | "chart"
    | "timeline"
    | "stats"
    | "hero"
    | "split"
    | "grid"
    | "quote"
    | "comparison"
    | "showcase"
    | "wellness-triangle"
    | "custom-metrics" // Added new custom-metrics slide type
  content?: any
}

interface SlideRendererProps {
  slide: SlideData
}

export default function SlideRenderer({ slide }: SlideRendererProps) {
  const [hoveredDimension, setHoveredDimension] = useState<string | null>(null)
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null) // Added state for custom metrics hover

  const renderContent = () => {
    switch (slide.type) {
      case "custom-metrics":
        return (
          <div className="min-h-full space-y-6 md:space-y-8 p-4 md:p-8 overflow-y-auto bg-gradient-to-br from-slate-50 to-white">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>

            {/* Custom animated metrics visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {slide.content.metrics?.map((metric: any, index: number) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredMetric(metric.title)}
                  onMouseLeave={() => setHoveredMetric(null)}
                >
                  <Card className="p-6 md:p-8 bg-white border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                    {/* Animated circular progress */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                        {/* Progress circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={metric.color}
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${metric.value * 2.83} 283`}
                          className="transition-all duration-1000 ease-out"
                          style={{
                            filter:
                              hoveredMetric === metric.title ? "drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))" : "none",
                          }}
                        />
                      </svg>

                      {/* Center content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="p-3 rounded-full mb-2" style={{ backgroundColor: `${metric.color}20` }}>
                          <div style={{ color: metric.color }}>{metric.icon}</div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground">
                          {metric.value}
                          {metric.unit}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground text-center">{metric.period}</div>
                      </div>
                    </div>

                    {/* Metric details */}
                    <div className="text-center space-y-3">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{metric.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{metric.description}</p>
                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-primary mb-1">{metric.impact}</div>
                        <div className="text-xs text-muted-foreground">{metric.details}</div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    {hoveredMetric === metric.title && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg pointer-events-none" />
                    )}
                  </Card>
                </div>
              ))}
            </div>

            {/* Insights section */}
            {slide.content.insights && (
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                  Research-Backed Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {slide.content.insights.map((insight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-1 bg-primary/10 rounded-full mt-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm md:text-base text-foreground leading-relaxed">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )

      case "title":
        return (
          <div className="min-h-full flex flex-col items-center justify-center text-center space-y-4 md:space-y-8 p-4 md:p-8">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary text-balance leading-tight">
                {slide.content.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance max-w-4xl">
                {slide.content.subtitle}
              </p>
            </div>
            {slide.content.image && (
              <div className="w-full max-w-2xl">
                <img
                  src={slide.content.image || "/placeholder.svg"}
                  alt={slide.content.title}
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            {slide.content.author && (
              <div className="text-base md:text-lg text-muted-foreground">
                <span className="font-medium">{slide.content.author}</span>
                {slide.content.date && <span className="ml-4">{slide.content.date}</span>}
              </div>
            )}
          </div>
        )

      case "wellness-triangle":
        return (
          <div className="min-h-full space-y-4 md:space-y-8 p-4 md:p-8 overflow-y-auto">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Interactive Pentagon Visualization */}
              <div className="xl:col-span-2 flex items-center justify-center">
                <div className="relative w-full max-w-lg aspect-square">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Background pentagon */}
                    <polygon
                      points="200,50 350,150 300,300 100,300 50,150"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      className="opacity-30"
                    />

                    {/* Connecting lines to center */}
                    {slide.content.wellnessDimensions?.map((dimension: any, index: number) => {
                      const angle = (index * 72 - 90) * (Math.PI / 180)
                      const x = 200 + 120 * Math.cos(angle)
                      const y = 200 + 120 * Math.sin(angle)
                      return (
                        <line
                          key={`line-${index}`}
                          x1="200"
                          y1="200"
                          x2={x}
                          y2={y}
                          stroke="#d1d5db"
                          strokeWidth="1"
                          className="opacity-40"
                        />
                      )
                    })}

                    {/* Center hub */}
                    <circle cx="200" cy="200" r="30" fill="var(--color-primary)" className="drop-shadow-lg" />
                    <text
                      x="200"
                      y="195"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white text-xs font-semibold"
                    >
                      Holistic
                    </text>
                    <text
                      x="200"
                      y="205"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white text-xs font-semibold"
                    >
                      Well-being
                    </text>

                    {/* Wellness dimension nodes */}
                    {slide.content.wellnessDimensions?.map((dimension: any, index: number) => {
                      const angle = (index * 72 - 90) * (Math.PI / 180)
                      const x = 200 + 120 * Math.cos(angle)
                      const y = 200 + 120 * Math.sin(angle)
                      const isHovered = hoveredDimension === dimension.name

                      return (
                        <g key={index}>
                          <circle
                            cx={x}
                            cy={y}
                            r={isHovered ? "25" : "20"}
                            fill={dimension.color}
                            className="cursor-pointer transition-all duration-200 drop-shadow-md"
                            onMouseEnter={() => setHoveredDimension(dimension.name)}
                            onMouseLeave={() => setHoveredDimension(null)}
                          />
                          <text
                            x={x}
                            y={y - 2}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-white text-xs font-bold pointer-events-none"
                          >
                            {dimension.value}%
                          </text>

                          {/* Dimension label */}
                          <text
                            x={x}
                            y={y + (y < 200 ? -35 : 45)}
                            textAnchor="middle"
                            className="fill-foreground text-sm font-medium pointer-events-none"
                          >
                            {dimension.name.split(" ")[0]}
                          </text>
                          <text
                            x={x}
                            y={y + (y < 200 ? -20 : 60)}
                            textAnchor="middle"
                            className="fill-foreground text-sm font-medium pointer-events-none"
                          >
                            {dimension.name.split(" ").slice(1).join(" ")}
                          </text>
                        </g>
                      )
                    })}
                  </svg>

                  {/* Hover tooltip */}
                  {hoveredDimension && (
                    <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border">
                      {slide.content.wellnessDimensions?.map((dimension: any) => {
                        if (dimension.name === hoveredDimension) {
                          return (
                            <div key={dimension.name} className="space-y-2">
                              <h4 className="font-semibold text-lg text-foreground">{dimension.name}</h4>
                              <p className="text-sm text-muted-foreground">{dimension.description}</p>
                              <p className="text-xs text-muted-foreground">{dimension.details}</p>
                              <div className="text-2xl font-bold" style={{ color: dimension.color }}>
                                {dimension.value}%
                              </div>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Legend and insights */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Wellness Dimensions</h3>
                  <div className="space-y-3">
                    {slide.content.wellnessDimensions?.map((dimension: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                        onMouseEnter={() => setHoveredDimension(dimension.name)}
                        onMouseLeave={() => setHoveredDimension(null)}
                      >
                        <div
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: dimension.color }}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-foreground">{dimension.name}</div>
                          <div className="text-xs text-muted-foreground">{dimension.value}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {slide.content.insights && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Key Insights</h3>
                    <ul className="space-y-3">
                      {slide.content.insights.map((insight: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case "content":
        return (
          <div className="min-h-full space-y-4 md:space-y-8 p-4 md:p-8 overflow-y-auto">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {slide.content.image && (
                <div className="space-y-4 h-auto">
                  <img
                    src={slide.content.image || "/placeholder.svg"}
                    alt={slide.content.title}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              <div className="space-y-4 md:space-y-6">
                {slide.content.points && (
                  <ul className="space-y-3 md:space-y-4">
                    {slide.content.points.map((point: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-base md:text-lg text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.content.cards && (
                  <div className="grid gap-3 md:gap-4">
                    {slide.content.cards.map((card: any, index: number) => (
                      <Card key={index} className="p-4 md:p-6 bg-secondary border-border">
                        <div className="flex items-start gap-3 md:gap-4">
                          {card.icon && <div className="p-2 bg-primary rounded-lg flex-shrink-0">{card.icon}</div>}
                          <div className="space-y-1 md:space-y-2 min-w-0">
                            <h4 className="font-semibold text-base md:text-lg text-foreground">{card.title}</h4>
                            <p className="text-sm md:text-base text-muted-foreground">{card.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case "chart":
        return (
          <div className="min-h-full space-y-4 md:space-y-8 p-4 md:p-8 overflow-y-auto">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8">
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  {slide.content.chartType === "bar" && (
                    <BarChart
                      data={slide.content?.data?.filter((item) => item && item.name && item.value !== undefined) || []}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="var(--color-primary)" />
                    </BarChart>
                  )}
                  {slide.content.chartType === "pie" && (
                    <PieChart>
                      <Pie
                        data={
                          slide.content?.data?.filter((item) => item && item.name && item.value !== undefined) || []
                        }
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="var(--color-primary)"
                        dataKey="value"
                        label
                      >
                        {(
                          slide.content?.data?.filter((item) => item && item.name && item.value !== undefined) || []
                        ).map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={`var(--color-chart-${(index % 5) + 1})`} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  )}
                  {slide.content.chartType === "line" && (
                    <LineChart
                      data={slide.content?.data?.filter((item) => item && item.name && item.value !== undefined) || []}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={3} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>

              <div className="space-y-4 md:space-y-6">
                {slide.content.insights && (
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">Key Insights</h3>
                    <ul className="space-y-2 md:space-y-3">
                      {slide.content.insights.map((insight: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm md:text-base text-foreground">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case "stats":
        return (
          <div className="min-h-full space-y-4 md:space-y-8 p-4 md:p-8 overflow-y-auto">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {slide.content.stats.map((stat: any, index: number) => (
                <Card key={index} className="p-4 md:p-8 text-center bg-white border-border">
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-3 md:p-4 bg-primary rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <div className="text-2xl md:text-4xl font-bold text-primary">{stat.value}</div>
                      <div className="text-base md:text-lg font-medium text-foreground">{stat.label}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.description}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      case "timeline":
        return (
          <div className="min-h-full space-y-4 md:space-y-8 p-4 md:p-8 overflow-y-auto">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>

            <div className="space-y-6 md:space-y-8">
              {slide.content.phases.map((phase: any, index: number) => (
                <div key={index} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base">
                      {index + 1}
                    </div>
                    {index < slide.content.phases.length - 1 && (
                      <div className="w-0.5 h-12 md:h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6 md:pb-8 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 mb-3 md:mb-4">
                      <h3 className="text-lg md:text-2xl font-semibold text-foreground">{phase.title}</h3>
                      <Badge variant="secondary" className="self-start">
                        {phase.duration}
                      </Badge>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{phase.description}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                      {phase.milestones.map((milestone: string, mIndex: number) => (
                        <div key={mIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-foreground">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "hero":
        return (
          <div className="min-h-full relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={slide.content.backgroundImage || "/placeholder.svg"}
                alt={slide.content.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative min-h-full flex flex-col justify-center items-center text-center space-y-4 md:space-y-6 px-4 md:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-balance drop-shadow-lg leading-tight">
                {slide.content.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 text-balance max-w-4xl drop-shadow-md">
                {slide.content.subtitle}
              </p>
              {slide.content.callout && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 max-w-2xl">
                  <p className="text-lg md:text-xl text-white font-medium">{slide.content.callout}</p>
                </div>
              )}
            </div>
          </div>
        )

      case "split":
        return (
          <div className="min-h-full grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-white p-6 md:p-12 flex flex-col justify-center">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                  {slide.content.leftTitle}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.leftSubtitle}</p>
                {slide.content.leftPoints && (
                  <ul className="space-y-3 md:space-y-4">
                    {slide.content.leftPoints.map((point: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="relative min-h-64 lg:min-h-full">
              <img
                src={slide.content.rightImage || "/placeholder.svg"}
                alt={slide.content.leftTitle}
                className="w-full h-full object-cover"
              />
              {slide.content.rightOverlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-8">
                  <div className="text-white text-right ml-[148px]">
                    <h3 className="text-lg md:text-2xl font-bold mb-2">{slide.content.rightOverlay.title}</h3>
                    <p className="text-sm md:text-lg">{slide.content.rightOverlay.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )

      case "grid":
        return (
          <div className="h-screen flex flex-col overflow-hidden">
            <div className="flex-shrink-0 text-center space-y-2 md:space-y-4 p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>
            <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {slide.content.items.map((item: any, index: number) => (
                  <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow h-auto">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-32 md:h-40 object-cover"
                    />
                    <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                      <h4 className="font-semibold text-base md:text-lg text-foreground leading-tight">{item.title}</h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      {item.metric && (
                        <div className="text-xl md:text-2xl font-bold text-primary pt-1">{item.metric}</div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "quote":
        return (
          <div className="min-h-full flex flex-col justify-center items-center text-center space-y-4 md:space-y-8 px-4 md:px-12">
            <div className="text-4xl md:text-8xl text-primary/20 font-serif">"</div>
            <blockquote className="text-xl md:text-3xl lg:text-4xl font-light text-foreground text-balance leading-relaxed max-w-4xl">
              {slide.content.quote}
            </blockquote>
            <div className="space-y-1 md:space-y-2">
              <cite className="text-lg md:text-xl font-medium text-primary not-italic">{slide.content.author}</cite>
              {slide.content.role && <p className="text-base md:text-lg text-muted-foreground">{slide.content.role}</p>}
            </div>
            {slide.content.image && (
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
                <img
                  src={slide.content.image || "/placeholder.svg"}
                  alt={slide.content.author}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        )

      case "comparison":
        return (
          <div className="min-h-full space-y-4 md:space-y-8 p-4 md:p-8 overflow-y-auto">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              <Card className="p-4 md:p-8 bg-red-50 border-red-200">
                <div className="space-y-4 md:space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-red-700">{slide.content.before.title}</h3>
                    <p className="text-sm md:text-base text-red-600 mt-2">{slide.content.before.subtitle}</p>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    {slide.content.before.points.map((point: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-red-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
              <Card className="p-4 md:p-8 bg-green-50 border-green-200">
                <div className="space-y-4 md:space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-green-700">{slide.content.after.title}</h3>
                    <p className="text-sm md:text-base text-green-600 mt-2">{slide.content.after.subtitle}</p>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    {slide.content.after.points.map((point: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-green-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        )

      case "showcase":
        return (
          <div className="h-screen overflow-hidden relative">
            {/* Main hero image */}
            <div className="absolute inset-0">
              <img
                src={slide.content.mainImage || "/placeholder.svg"}
                alt={slide.content.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content overlay */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-12">
              {/* Header */}
              <div className="space-y-2 md:space-y-4 max-w-2xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight drop-shadow-lg">
                  {slide.content.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 text-balance drop-shadow-md">{slide.content.subtitle}</p>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
                {slide.content.features?.map((feature: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary rounded-lg">{feature.icon}</div>
                      <h3 className="text-lg md:text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-white/80">{feature.description}</p>
                    {feature.metric && (
                      <div className="text-2xl md:text-3xl font-bold text-primary mt-2">{feature.metric}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Side images */}
            {slide.content.sideImages && (
              <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 space-y-4 hidden lg:block">
                {slide.content.sideImages.map((image: string, index: number) => (
                  <div key={index} className="w-24 h-24 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      default:
        return <div>Slide type not supported</div>
    }
  }

  return <div className="h-full">{renderContent()}</div>
}
