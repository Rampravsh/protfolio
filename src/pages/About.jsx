import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-[var(--primary)]">Me</span>
          </h1>

          <div className="text-gray-400 leading-7 space-y-4">
            <p>
              I’m a passionate and results-driven MERN stack developer with a
              knack for building clean, scalable, and user-friendly web
              applications. My journey into programming started with a
              fascination for how things work, and that curiosity continues to
              drive me today.
            </p>
            <p>
              I specialize in the MERN stack (MongoDB, Express.js, React,
              Node.js) and enjoy the process of turning complex problems into
              elegant solutions. Whether it's designing a RESTful API or
              building an interactive UI with React, I am committed to writing
              maintainable and efficient code. I'm always eager to learn new
              technologies and improve my skills to keep up with the latest
              industry trends.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails,
              experimenting with new recipes in the kitchen, or lost in a good
              book. I believe that a balanced life outside of work is key to
              staying creative and motivated.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
