
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Simple fade-in for sections
            gsap.utils.toArray(".about-section").forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="about-container pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
            {/* SECTION 1: ABOUT QUICK SNATCH */}
            <section className="about-section mb-24">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight glow-text text-white font-heading uppercase">
                    About Quick Snatch
                </h1>
                <h2 className="text-xl md:text-2xl text-[var(--accent-secondary)] mb-8 font-light tracking-wide">
                    A legacy of speed, strategy, and execution.
                </h2>
                <p className="max-w-3xl mx-auto text-[var(--text-muted)] text-lg leading-relaxed">
                    Quick Snatch is a competitive event designed to test reflexes and strategic thinking.
                    The previous edition set a benchmark for high-stakes competition.
                    This page archives our history, honors our champions, and highlights the moments that defined us.
                </p>
            </section>

            {/* SECTION 2: PAST WINNERS */}
            <section className="about-section mb-24">
                <h2 className="text-3xl font-bold mb-12 text-white font-heading uppercase tracking-wider">
                    Past Winners
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* WINNER CARD 1 */}
                    <WinnerCard
                        rank="1st"
                        team="TEAM VIPAX"
                        badge="Gold"
                        image="/vipax.jpg"
                        members={["Sandesh", "Ansh", "Jatin", "Pushkar", "Swarnim"]}
                        borderColor="#FFD700"
                    />

                    {/* WINNER CARD 2 */}
                    <WinnerCard
                        rank="2nd"
                        team="TEAM HUNTERRSS"
                        badge="Silver"
                        image="/hunter.jpg"
                        members={["Vikash", "Sahil", "Suraj", "Rahul", "Divyansh"]}
                        borderColor="#C0C0C0"
                    />

                    {/* WINNER CARD 3 */}
                    <WinnerCard
                        rank="3rd"
                        team="TEAM SCALER"
                        badge="Bronze"
                        image="/scaler.jpg"
                        members={["Akanksha", "Sahil", "Anirudh", "Anishka"]}
                        borderColor="#CD7F32"
                    />
                </div>
            </section>

            {/* SECTION 3: EVENT HIGHLIGHTS */}
            <section className="about-section">
                <h2 className="text-3xl font-bold mb-8 text-white font-heading uppercase tracking-wider">
                    Event Highlights
                </h2>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--glass-border)] shadow-[0_0_30px_rgba(0,0,0,0.5)] group">
                    <img src="/highlights.jpg" alt="Event Highlights" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">The Community</h3>
                        <p className="text-sm text-gray-300">United by code, driven by passion.</p>
                    </div>
                </div>
                <p className="mt-6 text-[var(--text-muted)] italic">
                    “Quick Snatch brought together innovation, competition, and community.”
                </p>
            </section>
        </div>
    );
};

const WinnerCard = ({ rank, team, badge, image, members, borderColor }) => (
    <div
        className="glass-panel p-8 relative overflow-hidden transition-all duration-300 hover:scale-105 group"
        style={{
            border: `1px solid ${borderColor}`,
            boxShadow: `0 0 20px ${borderColor}20, inset 0 0 20px ${borderColor}10`
        }}
    >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none z-20"></div>

        <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm tracking-wider uppercase" style={{ color: borderColor, border: `1px solid ${borderColor}` }}>
            {badge}
        </div>

        <div className="text-7xl font-bold mb-2 opacity-10 absolute -top-2 -left-2 font-heading select-none" style={{ color: borderColor }}>
            {rank}
        </div>

        <h3 className="text-3xl font-bold mt-8 mb-4 text-white font-heading tracking-widest uppercase z-10 relative drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {team}
        </h3>

        {/* Team Image */}
        <div className="w-full aspect-[4/3] bg-black/40 rounded-xl mb-6 flex items-center justify-center border border-white/10 overflow-hidden relative group/image shadow-lg">
            <img src={image} alt={`Team ${team}`} className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/image:opacity-40 transition-opacity duration-300"></div>

            {/* Rank overlay on image (optional, effectively handled by the card badge but nice for detail) */}
            {rank === "1st" && <div className="absolute bottom-4 right-4 text-2xl">🏆</div>}
        </div>

        <div className="space-y-2 relative z-10">
            {members.map((member, i) => (
                <div key={i} className="text-gray-300 text-sm font-medium tracking-wide flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/50"></span>
                    {member}
                    <span className="w-1 h-1 rounded-full bg-white/50"></span>
                </div>
            ))}
        </div>

        {/* Specific styling for 1st place to make it pop more */}
        {rank === "1st" && (
            <div className="absolute inset-0 pointer-events-none" style={{
                background: `radial-gradient(circle at 50% 0%, ${borderColor}15 0%, transparent 70%)`
            }}></div>
        )}
    </div>
);

export default About;
