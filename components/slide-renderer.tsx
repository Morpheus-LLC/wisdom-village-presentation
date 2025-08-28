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
  content?: any
}

interface SlideRendererProps {
  slide: SlideData
}

export default function SlideRenderer({ slide }: SlideRendererProps) {
  const renderContent = () => {
    switch (slide.type) {
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
                <div className="space-y-4">
                  <img
                    src={slide.content.image || "/placeholder.svg"}
                    alt={slide.content.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
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
                    <BarChart data={slide.content?.data || []}>
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
                        data={slide.content?.data || []}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="var(--color-primary)"
                        dataKey="value"
                        label
                      >
                        {(slide.content?.data || []).map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={`var(--color-chart-${(index % 5) + 1})`} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  )}
                  {slide.content.chartType === "line" && (
                    <LineChart data={slide.content?.data || []}>
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
          <div className="min-h-full space-y-4 md:space-y-8 p-4 md:p-8 overflow-y-auto">
            <div className="text-center space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
                {slide.content.title}
              </h2>
              {slide.content.subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground text-balance">{slide.content.subtitle}</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {slide.content.items.map((item: any, index: number) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-24 md:h-32 object-cover"
                  />
                  <div className="p-3 md:p-4 space-y-1 md:space-y-2">
                    <h4 className="font-semibold text-sm md:text-lg text-foreground">{item.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                    {item.metric && <div className="text-lg md:text-2xl font-bold text-primary">{item.metric}</div>}
                  </div>
                </Card>
              ))}
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

      default:
        return <div>Slide type not supported</div>
    }
  }

  return <div className="h-full">{renderContent()}</div>
}
