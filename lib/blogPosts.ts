export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readTime: string;
  content: string; // Markdown/HTML content
  coverImage: string | null;
}

export const LOCAL_POSTS: BlogPost[] = [
  {
    slug: "jack-of-all-trades",
    title: "Jack of All Trades — The Beautiful Disaster of Doing Everything at Once",
    date: "2026-07-16",
    tags: ["Personal"],
    summary: "At 1:47 AM, the world is quiet, but my screen isn't. An honest look at the mental friction of juggling college, startup projects, freelancing, and everything in between.",
    readTime: "5 min read",
    coverImage: null,
    content: `<p>It's <strong>1:47 AM</strong>.</p>
<p>The world is quiet.</p>
<p>My screen isn't.</p>
<p>There's a folder on my desktop called \`Proj\` (short for my projects). Nothing fancy. Just the folder of chaos. It has over a hundred folders inside it. If someone opened it, they probably wouldn't see organization. They'd see evidence. Every folder is a rabbit hole I disappeared into. A client project. A research experiment. A startup prototype. A hackathon idea that sounded brilliant at 2 AM. Half of them are unfinished. I still remember exactly why I started every single one.</p>
<p>I don't really try to explain my life anymore.</p>
<p>How do you explain a week where you're attending college during the day, working a job, then working on problems that don't even have guaranteed answers, fixing production issues for freelance clients, building your own startup after dinner, and somehow convincing yourself that joining another hackathon is still a perfectly reasonable decision?</p>
<p>After a while, your brain just stops separating them.</p>
<p>You're sitting in class when your phone vibrates.</p>
<p>Production issue.</p>
<p>Another notification.</p>
<p>A client found a bug.</p>
<p>Cliq lights up because my colleagues are also my responsibilities.</p>
<p>The professor is explaining something important, your lab submission is due in two hours, and somehow your mind is still wondering whether that memory leak you saw yesterday is actually fixed.</p>
<p>Your body is in one room.</p>
<p>Your mind is in four different repositories.</p>
<p>The funny thing is... after a while, it stops feeling chaotic.</p>
<p>It just becomes Tuesday.</p>
<p>There's always something unfinished because something else suddenly becomes more important. You get surprisingly good at living in that seventy-percent zone. Good enough to keep everything moving. Never enough to feel like you've truly finished anything.</p>
<p>The strange part is that every role expects a different version of you.</p>
<p>Research asks for patience.</p>
<p>Freelancing asks for speed.</p>
<p>A startup demands optimism, even on days when nothing works.</p>
<p>College asks you to study for tomorrow's exam while your production server is quietly catching fire.</p>
<p>You don't get time to become one person before you have to become another.</p>
<p>The part nobody really talks about is the guilt.</p>
<p>You tell your friends, "Maybe."</p>
<p>You already know the answer is no.</p>
<p>You're sitting with your family, but every few minutes you're checking the time because someone is waiting for a commit. GitHub happily paints another green square on the contribution graph. It doesn't count the coffee that went cold. Or the missed calls. Or the birthdays you almost forgot. Or the nights you stare at the ceiling wondering whether you're actually moving forward or just getting better at being busy.</p>
<p>Nobody taught me how to do any of this.</p>
<p>I figured it out by getting things wrong.</p>
<p>Then getting them wrong again.</p>
<p>Some mistakes cost sleep.</p>
<p>Some cost money.</p>
<p>Some cost confidence.</p>
<p>I still made them.</p>
<p>I still got back up.</p>
<p>Not because I'm unusually disciplined. Honestly, I'm not.</p>
<p>I got back up because every time I thought about quitting, there was always another idea I wanted to build. Another paper I wanted to read. Another bug I couldn't leave unfixed. Curiosity has always been louder than comfort.</p>
<p>Nobody asked me to carry all of this.</p>
<p>Most of it doesn't even make sense on paper.</p>
<p>But once I'm sitting in front of my screen, I can't pretend I didn't notice the harder problem.</p>
<p>So I pick it up.</p>
<p>People describe burnout like it's a cliff.</p>
<p>One day you're fine.</p>
<p>The next day you're broken.</p>
<p>That hasn't been my experience.</p>
<p>It's more like screws slowly coming loose.</p>
<p>Nothing dramatic happens.</p>
<p>You still wake up.</p>
<p>You still attend class.</p>
<p>You still join meetings.</p>
<p>You still write code.</p>
<p>You still smile when someone asks how things are going.</p>
<p>You just make a little more noise every day.</p>
<p>I tried slowing down once.</p>
<p>Closed all the tabs.</p>
<p>Muted every notification.</p>
<p>Told myself I'd just focus on college for a while.</p>
<p>It lasted three days.</p>
<p>By the fourth, I was reading another research paper over breakfast.</p>
<p>That afternoon I was debugging an API.</p>
<p>By evening I was back working on my startup.</p>
<p>The ideas don't wait because you've decided to rest.</p>
<p>My brain doesn't seem to have weekends.</p>
<p>People love quoting,</p>
<p><em>"Jack of all trades, master of none."</em></p>
<p>Almost nobody finishes the sentence.</p>
<p><em>"…though oftentimes better than a master of one."</em></p>
<p>Maybe that's the part worth remembering.</p>
<p>I don't think people like us are scattered because we can't focus.</p>
<p>I think we're scattered because too many things genuinely fascinate us.</p>
<p>Some projects will never ship.</p>
<p>Some repositories will collect dust.</p>
<p>Some experiments will fail.</p>
<p>Some ideas will stay as sketches inside a notebook.</p>
<p>I'm slowly becoming okay with that.</p>
<p>They aren't reminders of failure.</p>
<p>They're proof that I was curious enough to begin.</p>
<p>It's <strong>1:47 AM</strong> again.</p>
<p>There's a fresh terminal window waiting on my screen.</p>
<p>I should probably sleep.</p>
<p>Instead, I'm about to open another folder...</p>
<p>Maybe that's the problem.</p>
<p>Or maybe...</p>
<p>that's just who I am.</p>
<p><em>This is the first post in what I hope becomes a series about building things, chasing impossible ideas, making mistakes, and trying to make sense of a life that's somehow split between classrooms, research labs, production servers, and startup dreams.</em></p>`
  }
];
