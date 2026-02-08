import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Telescope,
    BookOpen,
    Tent,
    Sparkles,
    Camera,
    Users,
    Rocket,
    Phone,
    Calendar,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
    title: "Astro Adventures | Learning the Universe",
    description: "Inspiring curious minds through hands-on astronomy sessions, lectures, and outdoor observation experiences.",
};

export default function AstroAdventuresPage() {
    return (
        <div className="min-h-screen bg-black text-foreground font-sans selection:bg-purple-500/30">

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/astroadventures/hero-astroadventures-observation.jpg"
                        alt="Students using a telescope under the night sky"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                </div>

                <div className="container relative z-10 px-4 text-center space-y-8 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm text-purple-200 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-4 h-4" />
                        <span>Learning the Universe. Inspiring Curious Minds.</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Let’s Learn the Universe <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            and Have Fun Doing It
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Astro Adventures brings astronomy to life through hands-on learning, inspiring observation sessions, and engaging educational experiences for students of all ages.
                    </p>

                    <div className="pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <Button size="lg" className="h-14 px-8 text-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/25 rounded-full transition-all hover:scale-105" asChild>
                            <Link href="#register">
                                👉 Request an Astronomy Session
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Astro Adventures */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Why Astro Adventures?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We go beyond textbooks to provide immersive experiences that spark lifelong curiosity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Telescope,
                                title: "Hands-On Learning",
                                description: "Practical, interactive sessions where students observe, question, and explore the universe themselves.",
                                color: "text-blue-400"
                            },
                            {
                                icon: BookOpen,
                                title: "Detailed Tutorials",
                                description: "Specially designed lectures making complex astronomical concepts simple and exciting.",
                                color: "text-purple-400"
                            },
                            {
                                icon: Tent,
                                title: "Outdoor Activity",
                                description: "Fun-filled outdoor experiences that break boredom and keep students actively engaged.",
                                color: "text-green-400"
                            },
                            {
                                icon: Sparkles,
                                title: "An Inspiring Experience",
                                description: "Designed to ignite a lifelong interest in science, space, and discovery.",
                                color: "text-yellow-400"
                            }
                        ].map((item, index) => (
                            <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl text-zinc-100">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conduct a Session */}
            <section className="py-24 bg-zinc-950/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/5 blur-3xl rounded-full translate-x-1/2" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                    Conduct an Astronomy Session
                                </h2>
                                <h3 className="text-xl font-medium text-purple-300 mb-4">
                                    Want to Host an Astronomy Session at Your School or Community?
                                </h3>
                                <p className="text-lg text-zinc-300 leading-relaxed">
                                    Astro Adventures organizes astronomy observation sessions at schools, colleges, universities, and public spaces. We bring the observatory to you, providing telescopes, expert guidance, and an unforgettable experience for your students.
                                </p>
                            </div>
                            <Button size="lg" className="rounded-full" asChild>
                                <Link href="#register">
                                    Register Today <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 group">
                            <Image
                                src="/images/astroadventures/school-astronomy-session.jpg"
                                alt="School Astronomy Session"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-semibold text-lg">Bringing the Cosmos to Classrooms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section id="register" className="py-24 bg-black relative">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Register Today</h2>
                        <p className="text-lg text-purple-300 mb-6">To host an astronomy session at your school or institution</p>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            After you submit the registration form, a member of the Astro Adventures team will contact you to confirm the event details. This includes the event date, time, venue, and expected number of participants, allowing us to prepare everything required for a successful session.
                        </p>
                    </div>

                    <Card className="bg-zinc-900 border-zinc-800 shadow-xl">
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-300">Name</label>
                                        <Input placeholder="Your Full Name" className="bg-black/50 border-zinc-700 focus:border-purple-500 text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-300">Email Address</label>
                                        <Input type="email" placeholder="email@example.com" className="bg-black/50 border-zinc-700 focus:border-purple-500 text-white" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Contact Number</label>
                                    <Input type="tel" placeholder="+92 ..." className="bg-black/50 border-zinc-700 focus:border-purple-500 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Event Details</label>
                                    <Textarea
                                        placeholder="Please provide details about the venue, expected audience size, and preferred dates..."
                                        className="min-h-[120px] bg-black/50 border-zinc-700 focus:border-purple-500 text-white"
                                    />
                                </div>
                                <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-lg rounded-md text-white">
                                    ✅ Submit Request
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* About Astro Adventures */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">About Astro Adventures</h2>
                        <div className="h-1 w-20 bg-purple-600 mb-8" />
                        <h3 className="text-2xl font-semibold text-purple-300 mb-4">Education, Awareness & Beyond</h3>
                        <p className="text-lg text-zinc-400 max-w-3xl">
                            Astro Adventures is more than just observation sessions — it’s a growing community focused on spreading scientific curiosity and astronomical awareness.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                image: "/images/astroadventures/astrophotography-training.jpg",
                                title: "Computer Training & Astrophotography",
                                desc: "Learn to capture stunning visuals of the cosmos with guidance from experienced astrophotography professionals.",
                                icon: Camera
                            },
                            {
                                image: "/images/astroadventures/astronomy-meetup-islamabad.jpg",
                                title: "Discussions & Meetups",
                                desc: "We meet regularly with astronomy enthusiasts, students, and professionals across Islamabad to share ideas and knowledge.",
                                icon: Users
                            },
                            {
                                image: "/images/astroadventures/space-ideas-collaboration.jpg",
                                title: "New Ideas & Initiatives",
                                desc: "Have an innovative idea related to space or astronomy? Astro Adventures is the platform to explore and share it.",
                                icon: Rocket
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.icon className="w-5 h-5 text-purple-400" />
                                        <h4 className="font-semibold text-white">{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Be Part of the Cosmic Journey */}
            <section className="relative py-32 flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/astroadventures/cosmic-journey-background.jpg"
                        alt="Cosmic Background"
                        fill
                        className="object-cover opacity-40 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/80 to-transparent" />
                </div>

                <div className="container relative z-10 px-4 mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                            Join <span className="text-purple-400">Astro Adventures</span>
                        </h2>
                        <p className="text-lg text-zinc-300">
                            Our public observation sessions are completely free. Simply sign up to receive updates and become part of our growing astronomy community.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Updates about all Astro Adventures events",
                                "Exclusive invites to members-only sessions",
                                "Giveaways and goodie bags",
                                "Calendars for major cosmic events"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-200">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">Become a Member</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <Input placeholder="Email Address (required)" className="bg-black/50 border-white/20 text-white placeholder:text-zinc-500" required />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="First Name" className="bg-black/50 border-white/20 text-white placeholder:text-zinc-500" />
                                    <Input placeholder="Last Name" className="bg-black/50 border-white/20 text-white placeholder:text-zinc-500" />
                                </div>
                                <Input placeholder="Phone Number" className="bg-black/50 border-white/20 text-white placeholder:text-zinc-500" />
                                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold h-12 shadow-lg shadow-purple-500/20">
                                    🌌 Sign Up
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Monthly Observation Meetings */}
            <section className="py-24 bg-zinc-900 border-t border-zinc-800">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/astroadventures/f9-park-observation-session.jpg"
                                alt="F-9 Park Observation Session"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Monthly Astronomy Meetups</h2>
                            <p className="text-lg text-zinc-400">
                                Every month, members of Pak Astronomers Islamabad and the Islamabad Astronomy Society gather at F-9 Park, Islamabad for observation sessions and discussions.
                            </p>

                            <div className="space-y-4 pl-4 border-l-2 border-purple-500/50">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-purple-400" />
                                    <span className="text-zinc-300">Held between the 6th and 9th lunar date</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Telescope className="w-5 h-5 text-purple-400" />
                                    <span className="text-zinc-300">Includes telescope observations and group discussions</span>
                                </div>
                            </div>

                            <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                                <p className="text-sm text-zinc-400 mb-4">For details about the upcoming session, please contact Khawar Ali Sher.</p>
                                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Now to Join the Next Session
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events & Initiatives */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center text-white">Events & Initiatives</h2>

                    <div className="space-y-32">
                        {/* Event 1 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 space-y-6">
                                <h3 className="text-3xl lg:text-4xl font-bold text-purple-300">COMSATS University Islamabad</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg">
                                    An astronomy lecture and observation session was organized at COMSATS University Islamabad on 5th December 2019 by Pak Astronomers Islamabad. Students and faculty from the Physics Department and other faculties attended the event.
                                </p>
                                <p className="text-zinc-400 leading-relaxed text-lg">
                                    Participants experienced hands-on observation using advanced Go-To telescopes owned by Pak Astronomers Islamabad. A guest lecture was delivered by Khawar Ali Sher, highlighting astronomy’s role in inspiring curiosity and human progress.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-purple-900/10">
                                <Image
                                    src="/images/astroadventures/comsats-astronomy-session.jpg"
                                    alt="COMSATS University Event"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-purple-900/10">
                                <Image
                                    src="/images/astroadventures/air-university-world-space-week.jpg"
                                    alt="Air University Event"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl lg:text-4xl font-bold text-purple-300">Air University Islamabad</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg">
                                    During World Space Week 2020, despite Covid-19 restrictions, Air University Islamabad hosted a guest lecture session with strict SOPs in place. Students and faculty attended the session in the main auditorium.
                                </p>
                                <p className="text-zinc-400 leading-relaxed text-lg">
                                    Prior to the pandemic, a large-scale astronomy observation session was held at Air University in 2019, attended by over 500 students and teachers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
