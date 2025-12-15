import PageWrapper from "../components/PageWrapper";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <PageWrapper>
      <section className="min-h-screen px-6 py-24 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 ">
              My <span className="text-[var(--primary)]">Skills</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A collection of technologies I'm proficient in.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6
                           flex flex-col items-center gap-4
                           transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
              >
                <Icon
                  size={56}
                  style={{ color }}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold mt-2">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
