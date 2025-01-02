---
layout: page
title: "CDiffSD"
github: "https://github.com/Daniele-Trappolini/Diffusion-Model-for-Earthquake"
image: "/assets/img/projects/JGR-CDIFFSD.jpg"
permalink: /projects/cdiffsd/
---

Seismic waves contain information about the earthquake (EQ) source and many forms of noise deriving from the seismometer, anthropogenic effects, background noise associated with ocean waves, and microseismic noise. Separating the noise from the EQ signal is a critical first step in EQ physics and seismic waveform analysis. However, this is difficult because optimal parameters for filtering noise typically vary with time and may strongly alter the shape of the waveform.

Recently, diffusion models have demonstrated encouraging outcomes when tackling challenging tasks involving improving natural images and audio signals in conditioned and unconditioned restoration. In this study, we investigate the potential of utilizing an advanced iterative diffusion model called "cold diffusion" to restore clean earthquake signals from noisy ones.

Although the Cold Diffusion₁ model proves to be a highly promising work, it still requires further practical modifications, especially in real-world scenarios like ours. For this reason, our model proposes a variant of the model developed by Yen et al.₂, where, in addition to the sampling implemented by Cold Diffusion, there is also an improved training algorithm to enhance the model's ability to generalize better during the sampling process.
