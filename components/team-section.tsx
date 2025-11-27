"use client"

import { Github, Linkedin, ArrowRight, Award, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export function TeamSection() {
  const { t } = useLanguage()
  const router = useRouter()

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.team.title} <span className="gradient-text">{t.team.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.team.subtitle}</p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#ED2009] to-[#FF5B19] p-[2px] rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all group"
              >
                <div className="bg-card rounded-2xl overflow-hidden h-full">
                  {/* Banner Image */}
                  <div className="relative h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                  </div>

                  {/* Profile Photo */}
                  <div className="relative px-6 -mt-16 mb-4">
                    <div className="w-28 h-28 rounded-full border-4 border-card bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                      <img
                        src={
                          member.photo ||
                          `/placeholder.svg?height=112&width=112&query=${encodeURIComponent(member.name + " developer photo") || "/placeholder.svg"}`
                        }
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6 space-y-4">
                    {/* Name & Role */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(member.roles) ? (
                          member.roles.map((role, roleIndex) => (
                            <Badge
                              key={roleIndex}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs font-semibold px-3 py-1"
                            >
                              {role}
                            </Badge>
                          ))
                        ) : (
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs font-semibold px-3 py-1"
                          >
                            {member.role}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Experience & Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-primary" />
                        <span>{member.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{member.yearJoined}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 pt-2">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-lg bg-secondary/50 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-lg bg-secondary/50 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    {/* Learn More Button */}
                    <Button
                      variant="outline"
                      onClick={() => router.push("/under-construction")}
                      className="w-full mt-4 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all bg-transparent"
                    >
                      {t.team.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          {t.team.cta && (
            <div className="text-center pt-8">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                {t.team.cta}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
