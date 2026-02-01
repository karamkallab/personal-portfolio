export const educationData = [
  {
    period: "2023 - 2026 (Expected)",
    institution: "Malmö University",
    degree: "B.Sc. in System Development",
    description:
      "Focused on full-stack software development, object-oriented programming (OOP), data structures and algorithms, client/server architectures, and database-driven systems. Hands-on experience with RESTful APIs, software architecture, and system integration. Relevant coursework includes Object-Oriented Programming, Data Structures and Algorithms, Database Systems, Web Services, Information Security, and Applied Software Architecture. Swedish Scholastic Aptitude Test (Högskoleprovet): 1.55.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden scroll-mt-24">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Education</span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-secondary-foreground">My Education</h2>
          <p className="text-muted-foreground">A summary of my academic background.</p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-primary/30">
              <span className="text-sm text-primary font-medium">{edu.period}</span>
              <h3 className="text-xl font-semibold mt-2">{edu.institution}</h3>
              <p className="text-sm text-muted-foreground mt-4">{edu.degree}</p>
              <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};