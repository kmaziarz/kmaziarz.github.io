export default function Publications() {
  const publications = [
    {
      title: "Chemist-aligned retrosynthesis by ensembling diverse inductive bias models",
      authors: "K. Maziarz, G. Liu, H. Misztela, A. Kornev, P. Gaiński, H. Hoefling, M. Fortunato, R. Gupta, M. Segler",
      description: "Presents RetroChimera: a model predicting reactions to synthesize a given molecule. It fuses two modules: one based on symbolic graph rewriting, and one on a large Transformer. In blind eval by chemists, outputs from RetroChimera are preferred over real patented reactions.",
      conference: "preprint",
      link: "https://arxiv.org/abs/2412.05269",
      talk: "https://www.youtube.com/watch?v=hfULoWinFY4",
      talk_2: "https://www.microsoft.com/en-us/research/articles/chimera-accurate-synthesis-prediction-by-ensembling-models-with-diverse-induction-biases/",
    },
    {
      title: "Re-evaluating Retrosynthesis Algorithms with Syntheseus",
      authors: "K. Maziarz, A. Tripp, G. Liu, M. Stanley, S. Xie, P. Gaiński, P. Seidl, M. Segler",
      description: "Gives an opinionated take on best practices for retrosynthesis, and presents syntheseus — a synthesis planning library implementing them. Includes a re-evaluation of open-source reaction models, correcting discrepancies in previously published works.",
      conference: "Faraday Discussions",
      link: "https://arxiv.org/abs/2310.19796",
      code: "https://github.com/microsoft/syntheseus",
    },
    {
      title: "Retro-fallback: Retrosynthetic Planning in an Uncertain World",
      authors: "A. Tripp, K. Maziarz, S. Lewis, M. Segler, JM. Hernández-Lobato",
      description: "Proposes Retro-fallback: a retrosynthesis algorithm which outputs a group of synthesis plans maximizing the chance that at least one works in the lab. This is important because reactions used in these plans come from an ML model (such as RetroChimera) and can be wrong.",
      conference: "ICLR",
      link: "https://arxiv.org/abs/2310.09270",
      code: "https://github.com/AustinT/retro-fallback-iclr24",
    },
    {
      title: "Retrosynthetic Planning with Dual Value Networks",
      authors: "G. Liu, D. Xue, S. Xie, Y. Xia, A. Tripp, K. Maziarz, M. Segler, T. Qin, Z. Zhang, TY. Liu",
      description: "Advocates for separating the synthesis model for predicting valid rections (such as RetroChimera) from the search policy selecting among them. Presents PDVN — a framework built on that idea — where the policy is trained with RL from past searches (similarly to AlphaGo).",
      conference: "ICML",
      link: "https://arxiv.org/abs/2301.13755",
    },
    {
      title: "Learning to Extend Molecular Scaffolds with Structural Motifs",
      authors: "K. Maziarz, H. Jackson-Flux, P. Cameron, F. Sirockin, N. Schneider, N. Stiefl, M. Segler, M. Brockschmidt",
      description: "Presents MoLeR: a generative model of drugs which uses common molecular fragments as an inductive bias. It is much faster than previous models, and produces molecules of higher quality as judged by various metrics.",
      conference: "ICLR",
      link: "https://arxiv.org/abs/2103.03864",
      code: "https://github.com/microsoft/molecule-generation",
      blog: "https://www.microsoft.com/en-us/research/blog/moler-creating-a-path-to-more-efficient-drug-design/",
    },
    {
      title: "FS-Mol: A Few-Shot Learning Dataset of Molecules",
      authors: "M. Stanley, JF. Bronskill, K. Maziarz, H. Misztela, J. Lanini, M. Segler, M. Brockschmidt",
      description: "Releases FS-Mol: a few-shot learning meta-dataset of molecules, comprised of 5k+ tasks related to different properties. Includes a comparison of meta-learning and multi-task learning approaches.",
      conference: "NeurIPS",
      link: "https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/8d3bba7425e7c98c50f52ca1b52d3735-Abstract-round2.html",
      code: "https://github.com/microsoft/FS-Mol",
      blog: "https://www.microsoft.com/en-us/research/publication/fs-mol-a-few-shot-learning-dataset-of-molecules/",
      talk_2: "https://neurips.cc/virtual/2021/29879",
    },
    {
      title: "Outrageously large neural networks: The sparsely-gated mixture-of-experts layer",
      authors: "N. Shazeer, A. Mirhoseini, K. Maziarz, A. Davis, Q. Le, G. Hinton, J. Dean",
      description: "Scales up sparse Mixture-of-Experts models for language modelling and machine translation. Demonstrates improving results for 60B+ parameters already in the pre-Transformer era (2016).",
      conference: "ICLR",
      link: "https://arxiv.org/abs/2412.05269",
    },
  ];

  return (
    <section id="publications" className="bg-gray-900 text-gray-200">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2">
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-l shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
            >
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-xs text-gray-300 mb-2">
                {pub.authors.split(', ').map((name, i, arr) => (
                  <span key={i}>
                    <span className={name.includes('Maziarz') ? 'underline' : ''}>{name}</span>
                    {i < arr.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className="text-gray-300 mb-4">{pub.description}</p>

              <div className="flex flex-col md:flex-row text-sm">
                <span className="inline-block w-full md:w-48 text-center bg-gray-700 px-2 py-1 rounded-full text-gray-200 mb-3 md:mb-0 md:mr-4">
                  {pub.conference}
                </span>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs md:text-sm">
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:underline"
                    >
                      Paper
                    </a>
                  )}
                  {pub.code && (
                    <a
                      href={pub.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      Code
                    </a>
                  )}
                  {pub.blog && (
                    <a
                      href={pub.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:underline"
                    >
                      Blogpost
                    </a>
                  )}
                  {pub.talk && (
                    <a
                      href={pub.talk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-300 hover:underline"
                    >
                      Talk (by me)
                    </a>
                  )}
                  {pub.talk_2 && (
                    <a
                      href={pub.talk_2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-300 hover:underline"
                    >
                      Talk (by coauthor)
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center text-gray-400">
          <span>For a full list see&nbsp;</span>
          <a
            href="https://scholar.google.com/citations?user=BA8bBVkAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:underline transition-colors duration-200"
          >
            Google Scholar
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