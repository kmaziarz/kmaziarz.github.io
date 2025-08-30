import TextLink from "./TextLink";

export default function About() {
  return (
    <section id="about" className="py-6 bg-gray-900 text-white">
      <div className="px-4">
        <p className="text-gray-400">
          I’m a Principal Researcher at
          {" "}<TextLink href="https://www.microsoft.com/en-us/research/lab/microsoft-research-ai-for-science/">
            Microsoft Research AI for Science
          </TextLink>
          , where I’m applying Deep Learning to advance scientific discovery.
          Currently I'm working on
          {" "}<TextLink href="https://en.wikipedia.org/wiki/Retrosynthetic_analysis">
            retrosynthesis
          </TextLink>{" "}
          — the task of planning chemical reaction recipes to obtain complex drugs from simple building blocks.
          Earlier I worked on generative models of drug molecules — applied at
          {" "}<TextLink href="https://www.novartis.com/">
            Novartis
          </TextLink>{" "}
          with 150+ synthesized candidates —
          and few-shot molecular property prediction using meta-learning.
          I'm also serving as an Area Chair for
          {" "}<TextLink href="https://neurips.cc/">NeurIPS</TextLink>{" "}
          and
          {" "}<TextLink href="https://icml.cc/">ICML</TextLink>.

          <br /><br />

          Before joining MSR I studied Theoretical Computer Science at
          {" "}<TextLink href="https://en.wikipedia.org/wiki/Jagiellonian_University">Jagiellonian University</TextLink>{" "}
          in Cracow, and interned at
          {" "}<TextLink href="https://deepmind.google/">Google Brain</TextLink>
          ,
          {" "}<TextLink href="https://tensorflight.com/">Tensorflight</TextLink>{" "}
          and
          {" "}<TextLink href="https://www.janestreet.com/">Jane Street</TextLink>.
          Among other things, I worked on Mixture-of-Experts models, architecture search, multi-task learning and computer vision.
          I also had
          {" "}<TextLink href="https://cphof.org/profile/topcoder:krismaz">some success in competitive programming</TextLink>
          , advancing to the finals of Facebook HackerCup (top-25 worldwide), Distributed Google CodeJam (top-20 worldwide) and Google HashCode, and ranking 14th and 34th at the ACM ICPC finals.
          I've set problems for ACM ICPC regionals and IOI.

          <br /><br />

        </p>
        <div className="flex items-center text-gray-400">
          <span>For more details&nbsp;</span>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:underline transition-colors duration-200"
          >
            see my full CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
