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
        <div ref={containerRef} className="about-container">
            {/* SECTION 1: ABOUT QUICK SNATCH */}
            <section className="about-section">
                <h1 className="about-title glow-text">
                    About Quick Snatch
                </h1>
                <h2 className="about-subtitle">
                    A legacy of speed, strategy, and execution.
                </h2>
                <p className="about-description">
                    Quick Snatch is a competitive event designed to test reflexes and strategic thinking.
                    The previous edition set a benchmark for high-stakes competition.
                    This page archives our history, honors our champions, and highlights the moments that defined us.
                </p>
            </section>

            {/* SECTION 2: PAST WINNERS */}
            <section className="about-section">
                <h2 className="about-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>
                    Past Winners
                </h2>
                <div className="winners-grid">
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
                        image="image.png"
                        members={["Akanksha", "Sahil", "Anirudh", "Anishka"]}
                        borderColor="#CD7F32"
                    />
                </div>
            </section>

            {/* SECTION 3: EVENT HIGHLIGHTS */}
            <section className="about-section">
                <h2 className="about-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                    Event Highlights
                </h2>
                <div className="highlights-container">
                    <img src="/highlights.jpg" alt="Event Highlights" className="highlights-image" />
                    <div className="highlights-overlay"></div>
                    <div className="highlights-text">
                        <h3 className="highlights-title">The Community</h3>
                        <p className="highlights-subtitle">United by code, driven by passion.</p>
                    </div>
                </div>
                <p className="quote-text">
                    “Quick Snatch brought together innovation, competition, and community.”
                </p>
            </section>
        </div>
    );
};

const WinnerCard = ({ rank, team, badge, image, members, borderColor }) => (
    <div
        className="glass-panel winner-card"
        style={{
            border: `1px solid ${borderColor}`,
            boxShadow: `0 0 20px ${borderColor}20, inset 0 0 20px ${borderColor}10`
        }}
    >
        {/* Badge */}
        <div className="winner-badge" style={{ color: borderColor, border: `1px solid ${borderColor}` }}>
            {badge}
        </div>

        {/* Rank Number BG */}
        <div className="winner-rank" style={{ color: borderColor }}>
            {rank}
        </div>

        {/* Team Name */}
        <h3 className="team-name">
            {team}
        </h3>

        {/* Team Image */}
        <div className="team-image-container">
            <img src={image} alt={`Team ${team}`} className="team-image" />
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                opacity: 0.6
            }}></div>
            {rank === "1st" && <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '1.5rem' }}>🏆</div>}
        </div>

        {/* Members */}
        <div className="team-members-list">
            {members.map((member, i) => (
                <div key={i} className="team-member">
                    <span className="member-dot"></span>
                    {member}
                    <span className="member-dot"></span>
                </div>
            ))}
        </div>

        {/* 1st Place Radial Glow */}
        {rank === "1st" && (
            <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: `radial-gradient(circle at 50% 0%, ${borderColor}15 0%, transparent 70%)`
            }}></div>
        )}
    </div>
);

export default About;
