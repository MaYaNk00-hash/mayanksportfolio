import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
                        More than just code.
                    </h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-400">
                        <p className="mb-6">
                            I am a <strong className="text-primary-600 dark:text-primary-400">Backend Developer Intern</strong> with hands-on experience building scalable APIs, backend systems, and ML-based applications. I bridge the gap between complex logic and real-world solutions.
                        </p>
                        <p className="mb-6">
                            My approach is simple: understand the problem, define the outcome, and build the most efficient and scalable solution. I focus on backend performance, secure data handling, and reliable architecture.
                        </p>
                        <p className="mb-6">
                            I have developed real-world projects involving <strong className="text-primary-600 dark:text-primary-400">stock prediction, NLP-based sentiment analysis, and security vulnerability detection</strong>. I specialize in technologies like Python, REST APIs, FastAPI/Flask, SQL, and MongoDB.
                        </p>
                        <p className="mb-6">
                            My journey is fueled by a strong foundation in data structures, statistics, and machine learning with a focus on building production-ready systems. Currently, I am applying my skills to build <a href="https://techversehub.co.in" className="font-bold hover:underline">TechVerseHub</a>, a full-stack educational platform.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new machine learning techniques, participating in hackathons, or refining my understanding of system engineering. I'm always looking for the next challenge that pushes the boundaries of backend engineering and AI.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
