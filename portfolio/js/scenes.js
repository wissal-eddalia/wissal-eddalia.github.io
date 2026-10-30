/* ============================================================
   CINEMATIC BACKGROUNDS for project pages (canvas, no libraries).
   Scenes are chosen automatically from each project's keywords
   (slug + name + tags). Up to 2 scenes play together.

     Geo-AI / Geospatial / Space  ->  satellites orbiting a planet
     Djezzy / Telecom             ->  antenna towers + signal rings
     Reinforcement / SUMO         ->  intersection with moving traffic
     Particle swarm / Optimization->  PSO swarm chasing the optimum
     EEG / Biomedical             ->  EEG channels + sweeping cursor
     Search / Logistics           ->  graph search lighting up routes
     NLP / LLM / Transformers     ->  floating keywords + attention arcs
     Flutter / Mobile             ->  floating phone mockups
     Time series / Forecasting    ->  forecast chart with confidence band
     Deep learning / Vision       ->  neural network with firing pulses

   To force scenes for one project, add  scene:["satellites","antenna"]
   to that project in data.js (any names from the list above:
   satellites, antenna, traffic, swarm, eeg, graph, words, phones, waves, neural).
   ============================================================ */
(function () {
"use strict";
const TAU = Math.PI * 2, PI = Math.PI;
const R = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const FONT = '"Instrument Sans",system-ui,sans-serif';

const RULES = [
  ["satellites", /geo-?ai|geospatial|satellite|remote sensing|\bspace\b/],
  ["antenna",    /djezzy|telecom|antenna/],
  ["traffic",    /reinforcement|sumo|signal control/],
  ["swarm",      /particle|swarm|optimi[sz]ation/],
  ["eeg",        /\beeg\b|biomedical/],
  ["graph",      /\bsearch\b|logistics|folium|routing/],
  ["words",      /\bnlp\b|natural language|\bllms?\b|transformer|retrieval/],
  ["phones",     /flutter|mobile|ui\/ux/],
  ["waves",      /time.?series|forecast|sarima/],
  ["neural",     /deep learning|neural|computer vision/]
];
function pick(p) {
  if (Array.isArray(p.scene) && p.scene.length) return p.scene.slice(0, 3);
  const txt = [p.slug, p.name, ...(p.tags || [])].join(" ").toLowerCase(), out = [];
  for (const [n, re] of RULES) {
    if (out.length >= 2 || !re.test(txt)) continue;
    if (n === "waves" && out.includes("eeg")) continue;
    out.push(n);
  }
  return out.length ? out : ["words"];
}
function palette() {
  const dark = matchMedia("(prefers-color-scheme: dark)").matches;
  return dark ? { a: "52,211,153", b: "167,243,208", red: "248,113,113", k: 1 }
              : { a: "4,120,87",   b: "6,78,59",     red: "220,38,38",   k: .85 };
}

const L = {};   // scene factories: L.name(E) -> draw(t, dt)

/* ---------- satellites ---------- */
L.satellites = E => {
  const { w, h, S } = E, pr = Math.min(w, h) * .34, px = w * (w < 700 ? .7 : .8), py = h * .86;
  const orb = [
    { rx: pr * 1.5,  ry: pr * .5,  rot: -.45, sp: .16,  ph: 0 },
    { rx: pr * 1.95, ry: pr * .7,  rot: -.2,  sp: -.11, ph: 2.2 },
    { rx: pr * 2.5,  ry: pr * .62, rot: -.7,  sp: .07,  ph: 4.1 }
  ];
  const pos = (o, a, ox, oy) => {
    const ex = Math.cos(a) * o.rx, ey = Math.sin(a) * o.ry, cr = Math.cos(o.rot), sr = Math.sin(o.rot);
    return [px + ox + ex * cr - ey * sr, py + oy + ex * sr + ey * cr];
  };
  const sat = (x, y, ang, s, al) => {
    const c = E.ctx; c.save(); c.translate(x, y); c.rotate(ang);
    const g = c.createRadialGradient(0, 0, 0, 0, 0, 22 * s);
    g.addColorStop(0, E.c(.35 * al)); g.addColorStop(1, E.c(0));
    c.fillStyle = g; c.fillRect(-22 * s, -22 * s, 44 * s, 44 * s);
    c.lineWidth = 1; c.strokeStyle = E.c(.85 * al);
    for (const dy of [-1, 1]) {
      c.fillStyle = E.c(.25 * al); c.beginPath(); c.rect(-4 * s, dy > 0 ? 7 * s : -19 * s, 8 * s, 12 * s); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(0, dy * 5 * s); c.lineTo(0, dy * 7 * s); c.stroke();
    }
    c.fillStyle = E.c(.95 * al); c.fillRect(-7 * s, -5 * s, 14 * s, 10 * s);
    c.beginPath(); c.arc(8 * s, 0, 3.5 * s, -1.2, 1.2); c.stroke();
    c.restore();
  };
  return t => {
    const c = E.ctx, ox = -E.mx * 26, oy = -E.my * 16, cx = px + ox, cy = py + oy;
    let g = c.createRadialGradient(cx, cy, pr * .96, cx, cy, pr * 1.25);
    g.addColorStop(0, E.c(.28)); g.addColorStop(1, E.c(0));
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, pr * 1.25, 0, TAU); c.fill();
    g = c.createRadialGradient(cx - pr * .35, cy - pr * .35, pr * .1, cx, cy, pr);
    g.addColorStop(0, E.c(.2)); g.addColorStop(1, E.c(.03));
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, pr, 0, TAU); c.fill();
    c.strokeStyle = E.c(.55); c.lineWidth = 1.5; c.stroke();
    c.save(); c.beginPath(); c.arc(cx, cy, pr, 0, TAU); c.clip(); c.strokeStyle = E.c(.16); c.lineWidth = 1;
    for (let k = 0; k < 6; k++) { const a = t * .08 + k * PI / 6; c.beginPath(); c.ellipse(cx, cy, Math.abs(Math.cos(a)) * pr, pr, 0, 0, TAU); c.stroke(); }
    for (let k = -3; k <= 3; k++) { const la = k * .38, rr = Math.cos(la) * pr; c.beginPath(); c.ellipse(cx, cy + Math.sin(la) * pr, rr, rr * .16, 0, 0, TAU); c.stroke(); }
    c.restore();
    orb.forEach(o => {   // orbit paths
      c.beginPath();
      for (let k = 0; k <= 90; k++) { const [x, y] = pos(o, k / 90 * TAU, ox, oy); k ? c.lineTo(x, y) : c.moveTo(x, y); }
      c.strokeStyle = E.c(.13); c.setLineDash([4, 7]); c.lineWidth = 1; c.stroke(); c.setLineDash([]);
    });
    orb.forEach((o, i) => {
      const dir = Math.sign(o.sp), a = t * o.sp + o.ph, [x, y] = pos(o, a, ox, oy), [x2, y2] = pos(o, a + .02 * dir, ox, oy);
      const front = Math.sin(a) > 0, s = (front ? 1 : .7) * S * (1 + .12 * Math.sin(a)), al = front ? 1 : .6;
      for (let j = 1; j <= 16; j++) { const [tx, ty] = pos(o, a - j * .012 * dir, ox, oy); c.fillStyle = E.c(.5 * (1 - j / 17) * al); c.fillRect(tx - 1, ty - 1, 2, 2); }
      const b = Math.pow(Math.max(0, Math.sin(t * .55 + i * 2.1)), 10), d = Math.hypot(x - cx, y - cy);
      if (b > .02 && front && d > pr) {      // scanning beam toward the surface
        const ex = cx + (x - cx) / d * pr, ey = cy + (y - cy) / d * pr, nx = -(ey - y) / d * .22 * pr * .5, ny = (ex - x) / d * .22 * pr * .5;
        const lg = c.createLinearGradient(x, y, ex, ey); lg.addColorStop(0, E.c(.35 * b)); lg.addColorStop(1, E.c(.06 * b));
        c.fillStyle = lg; c.beginPath(); c.moveTo(x, y); c.lineTo(ex + nx, ey + ny); c.lineTo(ex - nx, ey - ny); c.closePath(); c.fill();
        c.strokeStyle = E.c(.7 * b); c.beginPath(); c.ellipse(ex, ey, 6 + 16 * (1 - b), 3 + 8 * (1 - b), 0, 0, TAU); c.stroke();
      }
      sat(x, y, Math.atan2(y2 - y, x2 - x), s, al);
    });
    // a satellite gliding across the sky
    const gx = ((t * 38) % (E.w + 260)) - 130, gy = E.h * .16 + Math.sin(t * .3) * 18 - E.my * 10;
    const tg = c.createLinearGradient(gx - 150, gy, gx, gy); tg.addColorStop(0, E.c(0)); tg.addColorStop(1, E.c(.4));
    c.strokeStyle = tg; c.lineWidth = 1.2; c.beginPath(); c.moveTo(gx - 150, gy); c.lineTo(gx, gy); c.stroke();
    sat(gx, gy, 0, S * 1.1, 1);
  };
};

/* ---------- antenna towers ---------- */
L.antenna = E => {
  const { w, h } = E, n = w < 700 ? 2 : 4;
  const xs = [.07, .2, .34, .5].slice(0, n).map(v => w * (w < 700 ? v * 1.8 : v)), hs = [.36, .25, .31, .21].map(v => h * v);
  return t => {
    const c = E.ctx, tops = [], S = E.S;
    xs.forEach((x0, i) => {
      const x = x0 + E.mx * (14 + i * 8), top = h - hs[i], bw = hs[i] * .1, y0 = top + 10, N = 9;
      c.strokeStyle = E.c(.45); c.lineWidth = 1.3;
      c.beginPath(); c.moveTo(x - bw, h); c.lineTo(x - 1.5, y0); c.moveTo(x + bw, h); c.lineTo(x + 1.5, y0); c.stroke();
      const hw = y => 1.5 + (bw - 1.5) * (y - y0) / (h - y0);
      c.lineWidth = 1; c.beginPath();
      for (let k = 0; k < N; k++) {
        const ya = y0 + (h - y0) * k / N, yb = y0 + (h - y0) * (k + 1) / N, s = k % 2 ? -1 : 1;
        c.moveTo(x - s * hw(ya), ya); c.lineTo(x + s * hw(yb), yb); c.moveTo(x - hw(yb), yb); c.lineTo(x + hw(yb), yb);
      }
      c.stroke();
      c.fillStyle = E.c(.5); c.strokeStyle = E.c(.9);
      for (const dx of [-9, 4]) { c.beginPath(); c.rect(x + dx * S, top - 8 * S, 5 * S, 18 * S); c.fill(); c.stroke(); }
      c.fillStyle = E.c(.4 + .6 * (Math.sin(t * 3 + i * 1.7) > 0 ? 1 : .15));
      c.beginPath(); c.arc(x, top - 13 * S, 3 * S, 0, TAU); c.fill();
      for (let k = 0; k < 3; k++) {                  // expanding signal rings
        const p = (t / 3.4 + k / 3 + i * .17) % 1;
        c.strokeStyle = E.c(.55 * (1 - p) * (1 - p)); c.lineWidth = 1.3;
        c.beginPath(); c.arc(x, top - 4, p * h * .33, -PI * .95, -PI * .05); c.stroke();
      }
      tops.push([x, top - 8]);
    });
    c.setLineDash([3, 6]);
    for (let i = 0; i < tops.length - 1; i++) {      // backhaul links with data packets
      const [ax, ay] = tops[i], [bx, by] = tops[i + 1];
      c.strokeStyle = E.c(.2); c.lineWidth = 1; c.beginPath(); c.moveTo(ax, ay); c.lineTo(bx, by); c.stroke();
    }
    c.setLineDash([]);
    for (let i = 0; i < tops.length - 1; i++) {
      const p = (t * .35 + i * .37) % 1, [ax, ay] = tops[i], [bx, by] = tops[i + 1];
      c.fillStyle = E.c(.95); c.beginPath(); c.arc(ax + (bx - ax) * p, ay + (by - ay) * p - Math.sin(p * PI) * 26, 2.4, 0, TAU); c.fill();
    }
    c.fillStyle = E.c(.18); c.fillRect(0, h - 2, w * .62, 2);
  };
};

/* ---------- traffic intersection ---------- */
L.traffic = E => {
  const { w, h, S } = E, rw = 54 * S, cx = w * (w < 700 ? .5 : .42), cy = h * .74, len = 18 * S, wd = 8 * S, vmax = 110 * S;
  const ax = [0, 0, 1, 1], sg = [1, -1, 1, -1], lane = [cy + rw / 4, cy - rw / 4, cx - rw / 4, cx + rw / 4];
  const total = i => (ax[i] ? h : w) + 80;
  const stop = [cx - rw / 2 - 12 + 40, w + 40 - (cx + rw / 2 + 12), cy - rw / 2 - 12 + 40, h + 40 - (cy + rw / 2 + 12)];
  const cars = [[], [], [], []], timers = [0, .8, 1.6, 2.4];
  const xy = (i, d) => { const m = sg[i] > 0 ? d - 40 : (ax[i] ? h : w) + 40 - d; return ax[i] ? [lane[i], m] : [m, lane[i]]; };
  const line = (c, a, b, x, y) => { c.moveTo(a, b); c.lineTo(x, y); };
  return (t, dt) => {
    const c = E.ctx, phase = Math.floor(t / 5.5) % 2, green = [phase === 0, phase === 0, phase === 1, phase === 1];
    for (let i = 0; i < 4; i++) {
      timers[i] -= dt;
      const last = cars[i][cars[i].length - 1];
      if (timers[i] <= 0 && (!last || last.d > len * 2.4)) { cars[i].push({ d: 0, v: 60 * S }); timers[i] = R(1.1, 3); }
      cars[i].forEach((car, k) => {
        let lim = k ? cars[i][k - 1].d - len - 10 * S : Infinity;
        if (!green[i] && car.d <= stop[i] + .5) lim = Math.min(lim, stop[i]);
        const v = Math.min(vmax, car.v + 120 * dt), nd = Math.max(car.d, Math.min(car.d + v * dt, lim));
        car.v = (nd - car.d) / Math.max(dt, 1e-3); car.d = nd;
      });
      while (cars[i].length && cars[i][0].d > total(i)) cars[i].shift();
    }
    c.lineWidth = 1; c.strokeStyle = E.c(.15); c.beginPath();
    for (const yy of [cy - rw / 2, cy + rw / 2]) { line(c, 0, yy, cx - rw / 2, yy); line(c, cx + rw / 2, yy, w, yy); }
    for (const xx of [cx - rw / 2, cx + rw / 2]) { line(c, xx, 0, xx, cy - rw / 2); line(c, xx, cy + rw / 2, xx, h); }
    c.stroke(); c.setLineDash([10, 12]); c.strokeStyle = E.c(.1); c.beginPath();
    line(c, 0, cy, cx - rw / 2, cy); line(c, cx + rw / 2, cy, w, cy); line(c, cx, 0, cx, cy - rw / 2); line(c, cx, cy + rw / 2, cx, h); c.stroke();
    c.strokeStyle = E.c(.22); c.lineDashOffset = -t * 20; c.beginPath(); c.arc(cx, cy, rw * 1.7, 0, TAU); c.stroke(); c.setLineDash([]); c.lineDashOffset = 0;
    c.fillStyle = E.c(.5); c.font = `500 ${12 * S}px ${FONT}`; c.fillText("π(a | s)  →  green phase", cx + rw * 1.9, cy - rw * 1.3);
    const sl = [[cx - rw / 2 - 12, cy, cx - rw / 2 - 12, cy + rw / 2], [cx + rw / 2 + 12, cy - rw / 2, cx + rw / 2 + 12, cy],
                [cx - rw / 2, cy - rw / 2 - 12, cx, cy - rw / 2 - 12], [cx, cy + rw / 2 + 12, cx + rw / 2, cy + rw / 2 + 12]];
    sl.forEach((p, i) => { c.strokeStyle = green[i] ? E.c(.9) : E.r(.85); c.lineWidth = 3; c.beginPath(); c.moveTo(p[0], p[1]); c.lineTo(p[2], p[3]); c.stroke(); });
    const ang = [0, PI, PI / 2, -PI / 2];
    cars.forEach((arr, i) => arr.forEach(car => {
      const [x, y] = xy(i, car.d); c.save(); c.translate(x, y); c.rotate(ang[i]);
      c.fillStyle = E.c(.12); c.beginPath(); c.moveTo(len / 2, 0); c.lineTo(len / 2 + 34 * S, -wd * 1.4); c.lineTo(len / 2 + 34 * S, wd * 1.4); c.fill();
      c.fillStyle = E.c(.75); c.beginPath(); c.roundRect(-len / 2, -wd / 2, len, wd, 3); c.fill();
      c.fillStyle = E.r(car.v < 8 ? .95 : .5); c.fillRect(-len / 2, -wd / 2, 2.5, wd); c.restore();
    }));
  };
};

/* ---------- PSO swarm ---------- */
L.swarm = E => {
  const { w, h } = E, N = 70, ps = Array.from({ length: N }, () => { const x = R(0, w), y = R(0, h); return { x, y, vx: 0, vy: 0, bx: x, by: y, bf: 1e9, hist: [] }; });
  let gx = w / 2, gy = h / 2;
  return (t, dt) => {
    const c = E.ctx, ox = w * .6 + Math.sin(t * .23) * w * .22, oy = h * .5 + Math.sin(t * .31 + 1) * h * .2, f = (x, y) => Math.hypot(x - ox, y - oy);
    let gb = 1e9; ps.forEach(p => { const d = f(p.x, p.y); if (d < p.bf) { p.bf = d; p.bx = p.x; p.by = p.y; } if (p.bf < gb) { gb = p.bf; gx = p.bx; gy = p.by; } });
    ps.forEach(p => {
      p.bf += 40 * dt;   // slowly forget personal best, since the optimum moves
      p.vx += (3 * Math.random() * (p.bx - p.x) + 3.4 * Math.random() * (gx - p.x)) * dt; p.vy += (3 * Math.random() * (p.by - p.y) + 3.4 * Math.random() * (gy - p.y)) * dt;
      const damp = Math.exp(-.9 * dt); p.vx *= damp; p.vy *= damp; p.x += p.vx * dt; p.y += p.vy * dt;
      p.hist.push(p.x, p.y); if (p.hist.length > 16) p.hist.splice(0, 2);
    });
    c.strokeStyle = E.c(.07); c.lineWidth = 1;
    for (let k = 1; k <= 5; k++) { c.beginPath(); c.arc(ox, oy, k * 70, 0, TAU); c.stroke(); }
    ps.forEach(p => {
      c.strokeStyle = E.c(.25); c.lineWidth = 1; c.beginPath(); c.moveTo(p.hist[0], p.hist[1]); for (let k = 2; k < p.hist.length; k += 2) c.lineTo(p.hist[k], p.hist[k + 1]); c.stroke();
      c.fillStyle = E.c(.75); c.beginPath(); c.arc(p.x, p.y, 2.2, 0, TAU); c.fill();
    });
    const pulse = (t % 2) / 2; c.strokeStyle = E.c(.9); c.lineWidth = 1.6; c.beginPath();
    c.moveTo(ox, oy - 10); c.lineTo(ox + 10, oy); c.lineTo(ox, oy + 10); c.lineTo(ox - 10, oy); c.closePath(); c.stroke();
    c.strokeStyle = E.c(.5 * (1 - pulse)); c.beginPath(); c.arc(ox, oy, 12 + pulse * 40, 0, TAU); c.stroke();
  };
};

/* ---------- EEG ---------- */
L.eeg = E => {
  const { w, h } = E, ch = 6, noise = Array.from({ length: 2048 }, () => Math.random() - .5);
  return t => {
    const c = E.ctx, top = h * .22, gap = h * .1, slow = .5 + .5 * Math.sin(t * .15), scan = (t * 90) % (w + 160) - 80;
    c.strokeStyle = E.c(.05); c.lineWidth = 1; c.beginPath();
    for (let x = (-t * 30) % 60; x < w; x += 60) { c.moveTo(x, top - 30); c.lineTo(x, top + gap * ch); }
    c.stroke();
    for (let k = 0; k < ch; k++) {
      const base = top + k * gap, A = gap * .45; c.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const u = x + t * 70, n = noise[((Math.floor(u / 4) + k * 97) % 2048 + 2048) % 2048];
        const y = base - A * (slow * Math.sin(u * .011 + k) + (1 - slow) * (.35 * Math.sin(u * .09 + k * 2) + .2 * Math.sin(u * .21) + .5 * n * .6));
        x ? c.lineTo(x, y) : c.moveTo(x, y);
      }
      c.strokeStyle = E.c(.2 + .35 * Math.exp(-Math.abs(base - (top + gap * ch / 2)) / 200)); c.lineWidth = 1.4; c.stroke();
      c.fillStyle = E.c(.5); c.font = `500 11px ${FONT}`; c.fillText(["Fp1", "C3", "C4", "O1", "O2", "Pz"][k], 16, base + 4);
    }
    const g = c.createLinearGradient(scan - 90, 0, scan, 0); g.addColorStop(0, E.c(0)); g.addColorStop(1, E.c(.14));
    c.fillStyle = g; c.fillRect(scan - 90, top - 30, 90, gap * ch + 30); c.fillStyle = E.c(.7); c.fillRect(scan, top - 30, 1.5, gap * ch + 30);
    const st = slow > .66 ? "N3 · deep sleep" : slow > .33 ? "N2 · light sleep" : "REM / wake";
    c.fillStyle = E.c(.6); c.font = `600 13px ${FONT}`; c.textAlign = "right"; c.fillText("stage: " + st, w - 24, top - 40); c.textAlign = "left";
  };
};

/* ---------- graph search ---------- */
L.graph = E => {
  const { w, h } = E, names = ["Alger", "Oran", "Constantine", "Sétif", "Annaba", "Béchar", "Ouargla", "Tizi Ouzou"], nodes = [];
  for (let tries = 0; nodes.length < 26 && tries < 500; tries++) {
    const x = R(w * .08, w * .94), y = R(h * .14, h * .9);
    if (nodes.every(n => Math.hypot(n.x - x, n.y - y) > 110)) nodes.push({ x, y, ph: R(0, TAU), adj: [] });
  }
  nodes.forEach((n, i) => nodes.map((m, j) => [j, Math.hypot(m.x - n.x, m.y - n.y)]).filter(a => a[0] !== i).sort((a, b) => a[1] - b[1]).slice(0, 2).forEach(([j]) => { if (!n.adj.includes(j)) n.adj.push(j); if (!nodes[j].adj.includes(i)) nodes[j].adj.push(i); }));
  const edges = []; nodes.forEach((n, i) => n.adj.forEach(j => { if (i < j) edges.push([i, j]); }));
  const solve = s => { const d = nodes.map(() => -1), p = nodes.map(() => -1), q = [s]; d[s] = 0; while (q.length) { const u = q.shift(); nodes[u].adj.forEach(v => { if (d[v] < 0) { d[v] = d[u] + 1; p[v] = u; q.push(v); } }); } return { d, p }; };
  let cyc = -1, sol, goal; const T = 10;
  return t => {
    const c = E.ctx, k = Math.floor(t / T), tc = t % T;
    if (k !== cyc) { cyc = k; const s = (k * 7) % nodes.length; sol = solve(s); sol.s = s; goal = sol.d.indexOf(Math.max(...sol.d)); }
    const front = tc * 1.4, P = nodes.map(n => [n.x + Math.sin(E.t * .4 + n.ph) * 6 - E.mx * 12, n.y + Math.cos(E.t * .35 + n.ph) * 6 - E.my * 8]);
    edges.forEach(([a, b]) => {
      const lit = sol.d[a] >= 0 && sol.d[b] >= 0 && Math.max(sol.d[a], sol.d[b]) <= front;
      c.strokeStyle = E.c(lit ? .45 : .1); c.lineWidth = lit ? 1.6 : 1; c.beginPath(); c.moveTo(...P[a]); c.lineTo(...P[b]); c.stroke();
    });
    if (front > sol.d[goal]) {      // final route glows
      c.strokeStyle = E.c(.95); c.lineWidth = 2.6; c.setLineDash([8, 6]); c.lineDashOffset = -t * 30; c.beginPath();
      for (let v = goal; v >= 0; v = sol.p[v]) { const [x, y] = P[v]; v === goal ? c.moveTo(x, y) : c.lineTo(x, y); }
      c.stroke(); c.setLineDash([]); c.lineDashOffset = 0;
    }
    nodes.forEach((n, i) => {
      const lit = sol.d[i] >= 0 && sol.d[i] <= front, edge = lit && sol.d[i] > front - 1, [x, y] = P[i], r = i === sol.s || i === goal ? 6 : 3.5;
      c.fillStyle = E.c(lit ? .9 : .3); c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill();
      if (edge || i === sol.s) { c.strokeStyle = E.c(.5); c.beginPath(); c.arc(x, y, r + 6 + 4 * Math.sin(t * 4), 0, TAU); c.stroke(); }
      if (i < names.length) { c.fillStyle = E.c(.55); c.font = `500 11px ${FONT}`; c.fillText(names[i], x + 9, y - 8); }
    });
  };
};

/* ---------- floating keywords ---------- */
L.words = E => {
  const { w, h, S } = E, p = E.project, stop = /^(and|with|the|for|of)$/i;
  let ws = [...(p.tags || []), ...String(p.name).split(/[\s:—–\-&,]+/).filter(x => x.length > 3 && !stop.test(x))];
  ws = [...new Set(ws)].slice(0, w < 700 ? 9 : 16);
  const items = ws.map((s, i) => ({ s, x: R(w * .05, w * .95), y: R(h * .12, h * .92), vx: R(-9, 9), vy: R(-6, 6), z: R(.6, 1.25), ph: R(0, TAU) }));
  return (t, dt) => {
    const c = E.ctx; items.forEach(it => { it.x += it.vx * dt; it.y += it.vy * dt; if (it.x < -100) it.x = w + 80; if (it.x > w + 100) it.x = -80; if (it.y < 40) it.vy = Math.abs(it.vy); if (it.y > h - 20) it.vy = -Math.abs(it.vy); });
    const pts = items.map(it => [it.x - E.mx * 30 * it.z, it.y - E.my * 20 * it.z]);
    c.lineWidth = 1;
    items.forEach((a, i) => items.forEach((b, j) => {
      if (j <= i) return; const [x1, y1] = pts[i], [x2, y2] = pts[j], d = Math.hypot(x2 - x1, y2 - y1);
      if (d < 260 * S) { c.strokeStyle = E.c(.2 * (1 - d / (260 * S))); c.beginPath(); c.moveTo(x1, y1); c.quadraticCurveTo((x1 + x2) / 2, Math.min(y1, y2) - d * .25, x2, y2); c.stroke(); }
    }));
    items.forEach((it, i) => {
      const [x, y] = pts[i], fs = 13 * it.z * S, a = .3 + .3 * Math.sin(t * .8 + it.ph); c.font = `600 ${fs}px ${FONT}`;
      const tw = c.measureText(it.s).width; c.strokeStyle = E.c(a * .5); c.fillStyle = E.c(a * .08); c.beginPath(); c.roundRect(x - 8, y - fs - 2, tw + 16, fs + 12, 8); c.fill(); c.stroke();
      c.fillStyle = E.c(a + .2); c.fillText(it.s, x, y);
    });
  };
};

/* ---------- phones ---------- */
L.phones = E => {
  const { w, h, S } = E, defs = [[.78, .46, 1, .12], [.6, .66, .74, -.1], [.92, .72, .6, .2]];
  return t => {
    const c = E.ctx;
    defs.forEach(([fx, fy, sc, rot], i) => {
      const pw = 100 * S * sc, ph = 200 * S * sc, x = w * fx - E.mx * (24 + i * 8), y = h * fy + Math.sin(t * .8 + i * 2) * 10 - E.my * 14;
      c.save(); c.translate(x, y); c.rotate(rot + Math.sin(t * .4 + i) * .03);
      c.fillStyle = E.c(.06); c.strokeStyle = E.c(.5); c.lineWidth = 1.6; c.beginPath(); c.roundRect(-pw / 2, -ph / 2, pw, ph, 14 * sc); c.fill(); c.stroke();
      c.fillStyle = E.c(.4); c.beginPath(); c.roundRect(-pw * .15, -ph / 2 + 6 * sc, pw * .3, 5 * sc, 3); c.fill();
      c.fillStyle = E.c(.25); c.fillRect(-pw / 2 + 10 * sc, -ph / 2 + 26 * sc, pw * .5, 7 * sc);
      const sel = Math.floor(t * .6 + i) % 3;
      for (let r = 0; r < 3; r++) {
        const ry = -ph / 2 + 44 * sc + r * 44 * sc; c.strokeStyle = E.c(r === sel ? .8 : .25); c.fillStyle = E.c(r === sel ? .18 : .05);
        c.beginPath(); c.roundRect(-pw / 2 + 8 * sc, ry, pw - 16 * sc, 36 * sc, 7 * sc); c.fill(); c.stroke();
        c.fillStyle = E.c(.3); c.fillRect(-pw / 2 + 14 * sc, ry + 8 * sc, 16 * sc, 20 * sc); c.fillRect(-pw / 2 + 36 * sc, ry + 10 * sc, pw * .35, 4 * sc); c.fillRect(-pw / 2 + 36 * sc, ry + 20 * sc, pw * .22, 4 * sc);
      }
      c.restore();
      if (i === 0) { const py = y - ph / 2 - 26 * S - Math.abs(Math.sin(t * 2)) * 12; c.fillStyle = E.c(.85); c.beginPath(); c.arc(x, py, 7 * S, 0, TAU); c.fill(); c.beginPath(); c.moveTo(x - 5 * S, py + 4 * S); c.lineTo(x + 5 * S, py + 4 * S); c.lineTo(x, py + 15 * S); c.fill(); }
    });
  };
};

/* ---------- forecast chart ---------- */
L.waves = E => {
  const { w, h } = E;
  return t => {
    const c = E.ctx, xs = w * .62, base = h * .58, off = t * 30, A = Math.min(h, 900) * .12;
    const f = x => base - (A * Math.sin((x + off) * .012) + A * .45 * Math.sin((x + off) * .031 + 1) + (x + off) * .0) - x * .05;
    c.strokeStyle = E.c(.06); c.lineWidth = 1; c.beginPath();
    for (let y = h * .2; y < h * .95; y += 70) { c.moveTo(0, y); c.lineTo(w, y); }
    c.stroke();
    c.beginPath(); for (let x = 0; x <= xs; x += 4) x ? c.lineTo(x, f(x)) : c.moveTo(x, f(x));
    c.strokeStyle = E.c(.7); c.lineWidth = 2; c.stroke();
    c.lineTo(xs, h); c.lineTo(0, h); const g = c.createLinearGradient(0, base - A, 0, h); g.addColorStop(0, E.c(.14)); g.addColorStop(1, E.c(0)); c.fillStyle = g; c.fill();
    c.beginPath(); for (let x = 0; x <= xs; x += 8) { const y = f(x) + Math.sin(x * .7 + off * .1) * 7; x ? c.lineTo(x, y) : c.moveTo(x, y); } c.strokeStyle = E.c(.2); c.lineWidth = 1; c.stroke();
    const sp = x => 8 + (x - xs) * .22;       // forecast: dashed line + widening confidence band
    c.beginPath(); for (let x = xs; x <= w; x += 6) { const y = f(x) - sp(x); x === xs ? c.moveTo(x, y) : c.lineTo(x, y); }
    for (let x = w; x >= xs; x -= 6) c.lineTo(x, f(x) + sp(x)); c.closePath(); c.fillStyle = E.c(.09); c.fill();
    c.setLineDash([7, 6]); c.beginPath(); for (let x = xs; x <= w; x += 6) x === xs ? c.moveTo(x, f(x)) : c.lineTo(x, f(x)); c.strokeStyle = E.c(.7); c.lineWidth = 2; c.stroke();
    c.strokeStyle = E.c(.3); c.lineWidth = 1; c.beginPath(); c.moveTo(xs, h * .2); c.lineTo(xs, h); c.stroke(); c.setLineDash([]);
    c.fillStyle = E.c(.6); c.font = `600 12px ${FONT}`; c.fillText("forecast →", xs + 10, h * .2 + 14);
    const pu = (t % 1.6) / 1.6; c.fillStyle = E.c(.95); c.beginPath(); c.arc(xs, f(xs), 4, 0, TAU); c.fill(); c.strokeStyle = E.c(.6 * (1 - pu)); c.beginPath(); c.arc(xs, f(xs), 5 + pu * 22, 0, TAU); c.stroke();
  };
};

/* ---------- neural network ---------- */
L.neural = E => {
  const { w, h } = E, sizes = [4, 6, 6, 3], x0 = w * (w < 700 ? .3 : .48), x1 = w * .95, y0 = h * .2, y1 = h * .82, pulses = [], act = sizes.map(n => Array(n).fill(0));
  const P = (l, i) => [x0 + (x1 - x0) * l / (sizes.length - 1) - E.mx * (10 + l * 6), y0 + (y1 - y0) * (i + .5) / sizes[l] - E.my * 8];
  return (t, dt) => {
    const c = E.ctx; if (Math.random() < dt * 5) pulses.push({ l: 0, i: Math.floor(R(0, sizes[0])), j: Math.floor(R(0, sizes[1])), p: 0 });
    c.lineWidth = 1; c.strokeStyle = E.c(.07);
    for (let l = 0; l < sizes.length - 1; l++) for (let i = 0; i < sizes[l]; i++) for (let j = 0; j < sizes[l + 1]; j++) { c.beginPath(); c.moveTo(...P(l, i)); c.lineTo(...P(l + 1, j)); c.stroke(); }
    for (let k = pulses.length - 1; k >= 0; k--) {
      const u = pulses[k]; u.p += dt * 1.1; const [ax, ay] = P(u.l, u.i), [bx, by] = P(u.l + 1, u.j);
      c.fillStyle = E.c(.95); c.beginPath(); c.arc(ax + (bx - ax) * u.p, ay + (by - ay) * u.p, 2.6, 0, TAU); c.fill();
      if (u.p >= 1) { act[u.l + 1][u.j] = 1; pulses.splice(k, 1); if (u.l + 2 < sizes.length) pulses.push({ l: u.l + 1, i: u.j, j: Math.floor(R(0, sizes[u.l + 2])), p: 0 }); }
    }
    sizes.forEach((n, l) => { for (let i = 0; i < n; i++) { const [x, y] = P(l, i); act[l][i] *= Math.exp(-1.6 * dt); c.fillStyle = E.c(.12 + .6 * act[l][i]); c.strokeStyle = E.c(.5); c.beginPath(); c.arc(x, y, 8, 0, TAU); c.fill(); c.stroke(); } });
  };
};

/* ---------- engine ---------- */
function start(canvas, project) {
  const ctx = canvas.getContext("2d"), reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const E = { ctx, w: 0, h: 0, S: 1, mx: 0, my: 0, t: 0, project, P: palette() };
  const col = (rgb, k) => a => `rgba(${rgb},${Math.max(0, a * E.P.k * (k || 1)).toFixed(3)})`;
  const setPal = () => { E.P = palette(); E.c = col(E.P.a); E.b = col(E.P.b); E.r = col(E.P.red); };
  const names = pick(project); let draws = [], stars = [], shoot = null, tx = 0, ty = 0, last = 0, raf = 0;
  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2); E.w = innerWidth; E.h = innerHeight; E.S = clamp(Math.min(E.w, E.h) / 800, .65, 1.3);
    canvas.width = E.w * dpr; canvas.height = E.h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); setPal();
    draws = names.filter(n => L[n]).map(n => L[n](E));
    stars = Array.from({ length: Math.round(E.w * E.h / 9000) }, () => ({ x: R(0, E.w), y: R(0, E.h), z: R(.2, 1), p: R(0, TAU) }));
  }
  function frame(ms) {
    const t = ms / 1000, dt = clamp(t - last, 0, .05); last = t; E.t = t;
    E.mx += (tx - E.mx) * .04; E.my += (ty - E.my) * .04;
    ctx.clearRect(0, 0, E.w, E.h);
    const sy = scrollY;
    stars.forEach(s => {
      const x = ((s.x - E.mx * 40 * s.z) % E.w + E.w) % E.w, y = ((s.y - sy * .12 * s.z - E.my * 25 * s.z) % E.h + E.h) % E.h;
      ctx.fillStyle = E.c((.25 + .35 * Math.sin(t * (.6 + s.z) + s.p)) * s.z); ctx.fillRect(x, y, 1.2 + s.z, 1.2 + s.z);
    });
    if (!shoot && !reduce && Math.random() < dt * .12) shoot = { x: R(E.w * .2, E.w), y: R(0, E.h * .35), l: 0 };
    if (shoot) {
      shoot.l += dt * 1.6; const k = shoot.l, x = shoot.x - k * 520, y = shoot.y + k * 220;
      const g = ctx.createLinearGradient(x, y, x + 120, y - 52); g.addColorStop(0, E.c(0)); g.addColorStop(1, E.c(.8 * (1 - k)));
      ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 120, y - 52); ctx.stroke(); if (k >= 1) shoot = null;
    }
    ctx.lineDashOffset = 0; draws.forEach(d => d(t, dt));
    if (!reduce) raf = requestAnimationFrame(frame);
  }
  size();
  addEventListener("resize", () => { size(); if (reduce) frame(6000); });
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => { setPal(); if (reduce) frame(6000); });
  if (!reduce) { addEventListener("pointermove", e => { tx = e.clientX / E.w - .5; ty = e.clientY / E.h - .5; }, { passive: true }); raf = requestAnimationFrame(frame); }
  else frame(6000);
  return { names };
}
window.CinematicBG = { start, pick };
})();
