export interface Devlog {
  timestamp: string;
  type: "INFO" | "SUCCESS" | "DEBUG" | "NOTE";
  content: string;
}

export const LOCAL_DEVLOGS: Devlog[] = [
  {
    timestamp: "2026-07-20T12:00:00Z",
    type: "NOTE",
    content: `<h1 class="text-2xl font-semibold text-text-primary mt-6 mb-4">Compiling Imagination: Thinking Through How to Simulate a Qubit on a Laptop CPU</h1>
<p class="mb-4 text-text-secondary leading-relaxed"><code class="px-1.5 py-0.5 rounded bg-surface border border-border font-mono text-xs text-accent">2026-07-20T12:00:00Z</code> · <strong>NOTE</strong></p>
<p class="mb-4 text-text-secondary leading-relaxed">I don't own a quantum computer. Nobody I know does. So today I went down a rabbit hole on a much smaller question: if I <em>did</em> want to fake one on my own laptop using PennyLane or Qiskit, what would that actually involve? Haven't written a line of code yet. This is just me figuring out the shape of the problem before I touch a keyboard.</p>
<p class="mb-4 text-text-secondary leading-relaxed">Here's the thing that got me thinking. Picture a coin spinning in the air. While it's spinning, it isn't "heads" or "tails" yet, it's some blend of both, with a specific weighting toward one side or the other. That blend is basically what a qubit is. And I'd be trying to capture that blend using a machine built entirely out of strict, deterministic 0s and 1s, the most binary substrate imaginable, and there's no physical processor on my desk holding a spinning coin in place. There's no Bloch sphere spinning in a fridge-sized dilution refrigerator next to me. Just Python and some linear algebra, in theory.</p>
<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 28px 0;">
  <div style="width: 80px; height: 80px; perspective: 600px;">
    <div style="width: 100%; height: 100%; border-radius: 50%; background: linear-gradient(135deg, #f5c542, #d4a017); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; color: #3a2c00; animation: coinSpin 1.4s linear infinite; transform-style: preserve-3d; box-shadow: 0 0 12px rgba(0,0,0,0.2);">0 / 1</div>
  </div>
  <span style="font-size: 12px; opacity: 0.7; font-style: italic;">a qubit, mid-thought, not committing to anything</span>
</div>
<style>
  @keyframes coinSpin {
    0%   { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
</style>
<h2 class="text-xl font-semibold text-text-primary mt-6 mb-3">The idea, as I understand it so far</h2>
<p class="mb-4 text-text-secondary leading-relaxed">A qubit's state is described by two numbers, usually called $\alpha$ and $\beta$. They tell you <em>how much</em> of "0" and how much of "1" is baked into the spin:</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">|\psi\rangle = \alpha|0\rangle + \beta|1\rangle, \quad \alpha, \beta \in \mathbb{C}, \quad |\alpha|^2 + |\beta|^2 = 1</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">You don't see $\alpha$ and $\beta$ directly. They're more like the "settings" of the spin. Square their sizes and you get the actual odds of landing on 0 or 1: $|\alpha|^2$ and $|\beta|^2$, which always add up to 1. The weird part is that $\alpha$ and $\beta$ can cancel or reinforce each other before anything is measured. That's the "interference" people mean when they call quantum stuff spooky.</p>
<p class="mb-4 text-text-secondary leading-relaxed">On the classical side, this blend is just a list of two numbers, a vector. A "gate" would just be a fixed grid of numbers (a matrix) that reshuffles that blend in a reversible way:</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">|\psi'\rangle = U|\psi\rangle, \quad U^\dagger U = I</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">So a common gate (Hadamard) applied to a coin that starts as a guaranteed "0" would look like this, on paper:</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">H|0\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix} = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix} = \frac{|0\rangle + |1\rangle}{\sqrt{2}}</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">That's it, as far as I can tell. A grid of 4 numbers multiplied against a list of 2 numbers. No magic, just arithmetic dressed up in physics notation. Whether PennyLane and Qiskit actually expose it that plainly under the hood is exactly what I want to go check next.</p>
<p class="mb-4 text-text-secondary leading-relaxed">The part that already makes sense to me, at least conceptually: this doesn't scale nicely. One coin is 2 numbers to track. Two coins isn't 4, it's every possible <em>combination</em> of their blends, still $2^2 = 4$ here, but the pattern is exponential, not additive. For $n$ coins:</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">\dim(\mathcal{H}) = 2^n</p>
<p class="mb-4 text-text-secondary leading-relaxed">$$</p>
<p class="mb-4 text-text-secondary leading-relaxed">Which is presumably why everyone says classical simulation caps out somewhere in the 30-40 qubit range on real hardware, let alone a laptop. I haven't hit that wall myself yet since I don't have code running to hit it with, but it's good to know it's coming before I start.</p>
<h2 class="text-xl font-semibold text-text-primary mt-6 mb-3">Why this is worth compiling imagination over</h2>
<p class="mb-4 text-text-secondary leading-relaxed">There's no hardware that would be doing anything "quantum" here. No spinning coin physically happening in RAM. What I'd be building is a spreadsheet that tracks exactly what the blend <em>would</em> be, updated every time a gate is applied, a mathematical shadow of the real thing and not the real thing itself.</p>
<p class="mb-4 text-text-secondary leading-relaxed">Without a real qubit to look at, that spreadsheet would be my only window into the Bloch sphere. Not a real quantum experiment. A very elaborate, very precise thought experiment that, if I build it right, should spit out correct odds.</p>
<p class="mb-4 text-text-secondary leading-relaxed">That's the thought I kept circling back to today: you're not just writing code, you're compiling imagination into something that (hopefully) produces falsifiable numbers.</p>
<h2 class="text-xl font-semibold text-text-primary mt-6 mb-3">Next</h2>
<ul class="list-disc pl-5 space-y-2 mb-4">
  <li>Actually install PennyLane and Qiskit and get a single-qubit circuit running. Nothing built yet, this was purely a "how does this work" pass.</li>
  <li>Once something runs, sanity-check the output against the Hadamard example above by hand.</li>
  <li>Then start poking at where the exponential wall actually bites on this machine.</li>
</ul>`
  }
];
