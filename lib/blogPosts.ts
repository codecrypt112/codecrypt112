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
  },
  {
    slug: "the-real-resume",
    title: "Points We Can't Write — The Real Resume",
    date: "2026-07-20",
    tags: ["Personal"],
    summary: "A raw look behind the polished bullet points of my resume. Exploring the friction of formal education, the projects that failed, and the personal cost of pursuing early growth.",
    readTime: "6 min read",
    coverImage: null,
    content: `<p>Every few months, I update my resume.</p>
<p>I rewrite a few bullet points.</p>
<p>Change the order of projects.</p>
<p>Add a new role.</p>
<p>Remove an old one.</p>
<p>Maybe tweak a sentence until it sounds a little more impressive.</p>
<p>Eventually, I export it as a PDF and think, <em>"Yeah... this looks good."</em></p>
<p>Then I close it.</p>
<p>Because the moment I do, I remember how little of the story actually made it onto those pages.</p>
<p>Resumes are strange things.</p>
<p>They capture outcomes.</p>
<p>Never the journey.</p>
<p>They'll tell you I worked as a research scientist.</p>
<p>They won't tell you about the nights I sat staring at research papers that felt impossible to understand. The ones I read over and over until a single paragraph finally started to make sense.</p>
<p>They'll tell you I built projects.</p>
<p>They won't tell you how many never made it past the prototype stage. Or how often I deleted weeks of work because I realized I had solved the wrong problem.</p>
<p>They'll tell you I studied engineering.</p>
<p>They won't tell you what it felt like to sit through classes while the technology I cared about was changing faster than the syllabus ever could.</p>
<p>That's the strange thing about resumes.</p>
<p>The most important parts never fit inside them.</p>
<hr class="my-8 border-border" />
<p>A few years ago, I was a diploma student in Coimbatore.</p>
<p>I didn't have a grand plan.</p>
<p>I just liked building things.</p>
<p>One project led to another.</p>
<p>Curiosity turned into habit.</p>
<p>Habit slowly became obsession.</p>
<p>Somewhere along the way, I found myself working on AI research while I was still trying to finish college.</p>
<p>Looking back, I don't think there was one big turning point.</p>
<p>It was thousands of small decisions.</p>
<p>Opening one more paper.</p>
<p>Trying one more experiment.</p>
<p>Breaking one more project.</p>
<p>Starting over.</p>
<p>Again.</p>
<p>And again.</p>
<hr class="my-8 border-border" />
<p>People often imagine learning as a straight line.</p>
<p>Mine never looked like that.</p>
<p>It looked like confusion.</p>
<p>Like reading the same paper five times and understanding a different sentence each time.</p>
<p>Like realizing that learning AI wasn't just about Python.</p>
<p>It was mathematics.</p>
<p>Statistics.</p>
<p>Computer architecture.</p>
<p>Distributed systems.</p>
<p>Optimization.</p>
<p>And, more than anything else, learning how to be comfortable saying,</p>
<p><em>"I don't know yet."</em></p>
<p>That word <em>yet</em> turned out to matter more than I expected.</p>
<hr class="my-8 border-border" />
<p>College, meanwhile, kept moving at its own pace.</p>
<p>Attendance.</p>
<p>Assignments.</p>
<p>Exams.</p>
<p>Marks.</p>
<p>Outside the classroom, everything moved differently.</p>
<p>Research didn't care about attendance.</p>
<p>Production systems didn't care about semester breaks.</p>
<p>Users didn't wait because it was exam week.</p>
<p>Living in both worlds at once often felt like switching between two different realities.</p>
<p>One rewarded having the right answers.</p>
<p>The other rewarded asking better questions.</p>
<hr class="my-8 border-border" />
<p>There are projects nobody will ever see.</p>
<p>Ideas that lasted a weekend.</p>
<p>Experiments that failed before they even began.</p>
<p>Entire weeks spent chasing problems that turned out not to be worth solving.</p>
<p>For a long time, I thought those were wasted efforts.</p>
<p>I don't anymore.</p>
<p>Every failed experiment quietly changed the way I approached the next one.</p>
<p>Not every project has to survive to be valuable.</p>
<p>Sometimes its only job is to teach you why the next version should exist.</p>
<hr class="my-8 border-border" />
<p>The biggest things I've learned never came with certificates.</p>
<p>They came from frustration.</p>
<p>From rebuilding something after breaking it.</p>
<p>From admitting I didn't understand.</p>
<p>From asking for help.</p>
<p>From trying again anyway.</p>
<p>Those lessons don't belong on a resume.</p>
<p>They're difficult to measure.</p>
<p>But they're the reason the bullet points exist in the first place.</p>
<hr class="my-8 border-border" />
<p>There's another part we rarely talk about.</p>
<p>The cost.</p>
<p>Somewhere between projects, research, classes, and deadlines, I stopped noticing weekends.</p>
<p>Friends slowly stopped asking because I was usually busy.</p>
<p>The laptop became a permanent fixture beside me.</p>
<p>I don't think anyone consciously chooses that life.</p>
<p>It just happens one late night at a time.</p>
<p>One deadline.</p>
<p>One idea.</p>
<p>One more thing you tell yourself you'll finish before going to bed.</p>
<hr class="my-8 border-border" />
<p>I still update my resume.</p>
<p>I probably always will.</p>
<p>It's useful.</p>
<p>Necessary, even.</p>
<p>But I've stopped believing it's the best summary of who someone is.</p>
<p>The real resume is written in the things no recruiter will ever read.</p>
<p>The questions you kept asking when nobody expected you to.</p>
<p>The failures that quietly changed the way you think.</p>
<p>The curiosity that refused to leave you alone.</p>
<p>Those things don't fit into bullet points.</p>
<p>Maybe they were never supposed to.</p>`
  },
  {
    slug: "museum-of-failures",
    title: "Museum of Failures — The Graveyard of Trying",
    date: "2026-07-21",
    tags: ["Personal"],
    summary: "Every developer has an archive of abandoned repositories and half-finished ideas. A reflection on the optimism of starting, the quiet death of projects, and why unfinished work isn't clutter — it's evidence of curiosity.",
    readTime: "4 min read",
    coverImage: null,
    content: `<p>Every developer has one.</p>
<p>Some call it <code>archive</code>.</p>
<p>Some call it <code>old_projects</code>.</p>
<p>Some don't bother naming it at all.</p>
<p>It's just a place where ideas go to die.</p>
<p>Mine isn't particularly organized.</p>
<p>It's full of projects that almost worked.</p>
<p>Projects that definitely didn't.</p>
<p>Ideas that made perfect sense at two in the morning and absolutely none the next afternoon.</p>
<p>Sometimes I open those folders.</p>
<p>Not because I want to revive them.</p>
<p>Just to remember who I was when I started.</p>
<hr class="my-8 border-border" />
<p>There's a strange kind of optimism required to begin something new.</p>
<p>When you create a fresh repository, every outcome still exists.</p>
<p>Maybe this becomes a startup.</p>
<p>Maybe it becomes a research paper.</p>
<p>Maybe it becomes an open-source project people actually use.</p>
<p>Maybe it changes your life.</p>
<p>For a brief moment, every possibility is still alive.</p>
<p>Then reality shows up.</p>
<hr class="my-8 border-border" />
<p>One project dies because someone else solved it better.</p>
<p>Another because you underestimated how difficult it would be.</p>
<p>One because life got busy.</p>
<p>One because your interests changed halfway through.</p>
<p>Another because, after two weeks of building it, you realized nobody actually needed it.</p>
<p>None of those reasons feel dramatic.</p>
<p>Most projects don't end with a catastrophic failure.</p>
<p>They simply... stop.</p>
<p>One commit becomes two weeks without opening the repository.</p>
<p>Two weeks quietly become a year.</p>
<hr class="my-8 border-border" />
<p>For a long time, I hated looking at unfinished work.</p>
<p>It felt like evidence that I lacked discipline.</p>
<p>Now I see something else.</p>
<p>I see curiosity.</p>
<p>Every abandoned project is proof that I cared enough to begin.</p>
<p>Some ideas deserved to fail.</p>
<p>Some deserved a better version of me than the one who started them.</p>
<p>Some existed only to teach me one lesson before disappearing.</p>
<p>That's enough.</p>
<hr class="my-8 border-border" />
<p>I remember trying to read papers I couldn't understand.</p>
<p>Building systems I had no business attempting.</p>
<p>Training models that produced nothing but errors.</p>
<p>Writing code that worked exactly once.</p>
<p>Back then, it felt embarrassing.</p>
<p>Now it's almost funny.</p>
<p>Because every project I consider "successful" today exists only because dozens of invisible ones failed first.</p>
<p>Nobody asks about those.</p>
<p>They ask about the final result.</p>
<hr class="my-8 border-border" />
<p>Success has excellent public relations.</p>
<p>Failure doesn't.</p>
<p>People post screenshots when something launches.</p>
<p>Nobody posts the week they spent debugging a problem that turned out to be a typo.</p>
<p>Nobody announces they deleted five thousand lines of code because the entire design was wrong.</p>
<p>Nobody celebrates realizing they should start over.</p>
<p>Maybe we should.</p>
<p>Those moments are expensive.</p>
<p>They're also where most learning happens.</p>
<hr class="my-8 border-border" />
<p>I don't think failure is the right word anymore.</p>
<p>Failure suggests something was supposed to succeed.</p>
<p>Trying doesn't make that promise.</p>
<p>Trying simply says,</p>
<p><em>"This seemed worth exploring."</em></p>
<p>Sometimes exploration leads somewhere.</p>
<p>Sometimes it leads to a dead end.</p>
<p>The dead ends matter too.</p>
<p>They teach you where not to build next.</p>
<hr class="my-8 border-border" />
<p>Every now and then, I revisit an old project.</p>
<p>Not to finish it.</p>
<p>Just to read my own code.</p>
<p>It's like opening a time capsule.</p>
<p>You can almost hear the version of yourself who wrote it.</p>
<p>You notice the shortcuts.</p>
<p>The unnecessary complexity.</p>
<p>The comments that confidently explain something you now know is completely wrong.</p>
<p>It's oddly comforting.</p>
<p>Growth is easier to measure backwards.</p>
<hr class="my-8 border-border" />
<p>Maybe that's why I don't delete those projects anymore.</p>
<p>They aren't clutter.</p>
<p>They're evidence.</p>
<p>Evidence that I kept showing up.</p>
<p>That I kept being curious.</p>
<p>That I was willing to look foolish in private so I could become a little better in public.</p>
<p>Not every repository deserved a release.</p>
<p>Not every experiment deserved a paper.</p>
<p>Not every idea deserved a second attempt.</p>
<p>But every one of them deserved to exist.</p>
<p>Because without them, I wouldn't have become the person capable of building the things that did survive.</p>
<hr class="my-8 border-border" />
<p>I still start too many projects.</p>
<p>I still underestimate how hard they'll be.</p>
<p>I still convince myself,</p>
<p><em>"This one will only take a weekend."</em></p>
<p>It never does.</p>
<p>And honestly...</p>
<p>I hope I never stop.</p>
<p>Because one day, when I look back at my own little museum of failures, I don't want to remember everything I finished.</p>
<p>I want to remember that I never stopped trying.</p>`
  }
];
