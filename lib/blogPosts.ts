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
  },
  {
    slug: "having-no-choice-but-to-do-it",
    title: "Having No Choice But to Do It",
    date: "2026-11-11",
    tags: ["Personal"],
    summary: "The difference between wanting to do something and feeling like you have to. A reflection on relentless work, guilt around rest, and the thing that gets you to open the laptop again tomorrow.",
    readTime: "4 min read",
    coverImage: null,
    content: `<p>Sometimes I wonder what would happen if I just stopped.</p>
<p>Not quit everything. Not disappear. Just stopped for a while.</p>
<p>No deadlines. No research papers waiting to be read. No production issues. No startup ideas. No half-finished experiments sitting somewhere, waiting for me to return.</p>
<p>Just a few days of doing absolutely nothing.</p>
<p>I wonder how that would feel.</p>
<p>And then reality kicks in.</p>
<p>There are things waiting. People depending on me. Things I've started that I can't simply walk away from. Responsibilities that don't disappear just because I'm tired.</p>
<p>So I get back to work.</p>
<p>Not because I'm always motivated. Not because I wake up every morning excited to do all of this.</p>
<p>Sometimes, I simply don't feel like I have another option.</p>
<hr class="my-8 border-border" />
<p>I don't think people understand the difference between <em>wanting to do something</em> and <em>feeling like you have to do it.</em></p>
<p>They look similar from the outside.</p>
<p>You see someone working late, building products, studying, doing research, taking up new challenges. It looks like ambition. Maybe it is.</p>
<p>But there's another side to it.</p>
<p>Sometimes you're working because you know what happens if you don't.</p>
<p>Sometimes you're learning something new because you can't afford to remain where you are.</p>
<p>Sometimes you're taking up another responsibility because the opportunity might not come again.</p>
<p>And sometimes you keep going because you've already come too far to imagine what stopping would look like.</p>
<p>It's a strange place to be.</p>
<p>You aren't exactly unhappy with what you're doing.</p>
<p>But you aren't entirely free from it either.</p>
<hr class="my-8 border-border" />
<p>There have been days when I wanted to close my laptop and walk away.</p>
<p>Days when a research problem refused to make sense, a project wasn't moving, and everything I had planned for the day remained unfinished.</p>
<p>You look at the clock.</p>
<p>Another day gone.</p>
<p>And somehow, you feel guilty for being tired.</p>
<p>That's probably the part I struggle with the most.</p>
<p>Rest feels like something I need to earn.</p>
<p>I finish one task, and another appears. I solve one problem, and three more show up. Even when nothing is urgent, there's always something I could be doing.</p>
<p>There's always another paper.</p>
<p>Another concept.</p>
<p>Another feature.</p>
<p>Another opportunity I might be missing.</p>
<p>I don't know when I started treating every quiet moment as something that needed to be filled.</p>
<hr class="my-8 border-border" />
<p>Maybe some of it comes from where I started.</p>
<p>When you don't have everything figured out, opportunities feel different.</p>
<p>You don't casually turn them down.</p>
<p>You don't always get to choose the perfect project, the perfect timing, or the perfect circumstances.</p>
<p>You learn what you can.</p>
<p>You take what comes your way.</p>
<p>You figure things out as you go.</p>
<p>And somewhere in that process, you become the person people expect to figure things out.</p>
<p>The person who can take a difficult problem and somehow make progress.</p>
<p>The person who says, "I'll try."</p>
<p>I like being that person.</p>
<p>But sometimes I wish people understood that figuring things out doesn't mean I always know what I'm doing.</p>
<p>Sometimes I'm just as lost as everyone else.</p>
<p>I just don't have the luxury of staying lost for too long.</p>
<hr class="my-8 border-border" />
<p>There's a particular kind of loneliness in doing things nobody around you fully understands.</p>
<p>You can explain your job.</p>
<p>You can explain your startup.</p>
<p>You can tell someone you're working on a research problem.</p>
<p>But explaining why you're doing all of them at once is harder.</p>
<p>People ask why you don't slow down.</p>
<p>Some ask why you take on so much.</p>
<p>Others tell you that you're young and should enjoy life.</p>
<p>They're probably right.</p>
<p>I know there are things I'm missing.</p>
<p>Conversations I should have stayed longer for. Friends I should have called back. Evenings that could have been spent doing absolutely nothing.</p>
<p>I notice these things.</p>
<p>It's not that I don't care.</p>
<p>Sometimes I care so much that I don't know what to put down first.</p>
<hr class="my-8 border-border" />
<p>I wish I could say there's some beautiful philosophy behind all of this.</p>
<p>That I have a clear vision, a perfect plan, and an unshakable belief in where I'm going.</p>
<p>I don't.</p>
<p>There are days when I question almost everything.</p>
<p>Whether I'm moving fast enough.</p>
<p>Whether I'm learning the right things.</p>
<p>Whether all these efforts will eventually lead somewhere.</p>
<p>Whether I'm building something meaningful or just keeping myself occupied.</p>
<p>I don't always have answers.</p>
<p>But the next morning comes anyway.</p>
<p>There's work to do.</p>
<p>And I get up.</p>
<hr class="my-8 border-border" />
<p>Maybe that's what this is really about.</p>
<p>Not being endlessly motivated.</p>
<p>Not being exceptionally disciplined.</p>
<p>Not even being ambitious all the time.</p>
<p>It's about having something inside you that refuses to let you walk away.</p>
<p>Maybe it's curiosity.</p>
<p>Maybe it's responsibility.</p>
<p>Maybe it's the fear of going back to a place you've spent years trying to move beyond.</p>
<p>Maybe it's the hope that all these seemingly disconnected efforts will eventually make sense.</p>
<p>I honestly don't know.</p>
<p>Perhaps it's a little bit of everything.</p>
<hr class="my-8 border-border" />
<p>I still want to build things.</p>
<p>I still want to understand difficult problems, work on ideas that seem a little too ambitious, and see what I'm capable of.</p>
<p>I don't want to lose that part of myself.</p>
<p>But I'm beginning to understand that wanting a life and being consumed by the pursuit of it are two different things.</p>
<p>I haven't figured out where that line is.</p>
<p>I'm still trying.</p>
<p>And tomorrow, I'll probably open my laptop again.</p>
<p>Not because I have everything figured out.</p>
<p>Not because I'm ready.</p>
<p>But because there are things I still want to do, things I need to do, and a future I'm not quite ready to give up on.</p>
<p>Sometimes, that's all the reason you have.</p>
<p>And sometimes, that's enough.</p>
<hr class="my-8 border-border" />
<p><em>Some things we do because we love them. Some because we have to. And sometimes, after doing them long enough, we can no longer tell the difference.</em></p>`
  },
  {
    slug: "the-fear-of-being-responsible",
    title: "The Fear of Being Responsible",
    date: "2026-11-11",
    tags: ["Personal"],
    summary: "Leading a team means carrying other people's time, effort, and trust. A reflection on the fear that comes with responsibility, and why showing up anyway might be what bravery looks like.",
    readTime: "4 min read",
    coverImage: null,
    content: `<p>There is a strange kind of fear that comes with having a team.</p>
<p>It's not the fear of failing at something yourself. I've experienced that plenty of times. Projects fail, experiments don't work, ideas turn out to be bad. You take a hit, learn something, and try again.</p>
<p>But when you have people working with you, failure starts to feel different.</p>
<p>Because now, it isn't just your time you're spending. It's theirs too.</p>
<p>Their effort. Their expectations. Sometimes, even their trust in you.</p>
<p>And that's a responsibility I don't think I fully understood until I had to carry it.</p>
<p>I still have moments where I look at everything and wonder whether I'm actually ready for this.</p>
<p>Am I making the right decisions? Am I giving the team enough direction? Do I know how to handle disagreements? What happens when something goes wrong and everyone looks at me for an answer?</p>
<p>There are days when I don't even have an answer for myself.</p>
<p>Yet, somehow, I'm expected to find one for everyone else.</p>
<p>That's probably one of the strangest parts of building something with other people. You don't get to wait until you feel completely confident. There are conversations to have, decisions to make, things to resolve. Even when you're uncertain, the work keeps moving.</p>
<p>And you have to move with it.</p>
<p>I sometimes feel like I'm learning two things at the same time: how to build the thing we're working on, and how to become someone people can depend on while building it.</p>
<p>The second one is much harder.</p>
<p>Nobody really prepares you for the small things that come with managing people. Following up without sounding like you're constantly checking on them. Knowing when to give someone space and when to step in. Making decisions that won't make everyone happy. Admitting that you don't know something without making the entire team feel lost.</p>
<p>And then there is the question that stays in the back of my mind:</p>
<p>What if I let them down?</p>
<p>It's easy to talk about leadership when everything is going well. When deadlines are met, ideas work, and everyone is moving in the same direction.</p>
<p>But what about when there isn't enough progress? When plans change? When you cannot provide the opportunities or resources you hoped to provide? When someone has put their time into something and you are still trying to figure out whether it will work?</p>
<p>I think about those things more than I probably show.</p>
<p>I don't want to become the kind of person who gives people responsibilities without understanding the weight of them. I don't want to make promises just because they sound good. And I definitely don't want someone else's effort to become something I take for granted.</p>
<p>At the same time, I know I will make mistakes.</p>
<p>I'm still learning. I'm still figuring out how to communicate better, how to plan properly, how to make decisions, and how to handle situations I've never encountered before.</p>
<p>Sometimes I feel too young for the responsibilities I've taken on. Other times, I wonder whether age has anything to do with it. Maybe everyone who starts something new feels a little unqualified at first.</p>
<p>But the fear doesn't go away just because I acknowledge it.</p>
<p>I still feel it before certain conversations. Before making decisions. Before telling someone that we're changing direction. Before taking responsibility for something that might not work.</p>
<p>And yet, I show up.</p>
<p>Not because I'm fearless. Not because I have some exceptional ability to lead people. I show up because I know there are people who have chosen to spend their time building something alongside me. I owe them honesty, effort, and the willingness to take responsibility when things get difficult.</p>
<p>I don't think bravery in this situation means acting like you know everything.</p>
<p>Maybe it means being honest when you don't. Listening when someone has a better idea. Taking responsibility when a decision goes wrong instead of looking for someone to blame. And making sure that the people working with you don't have to carry your mistakes alone.</p>
<p>I'm beginning to understand that managing a team isn't just about dividing work and tracking progress.</p>
<p>It's about trust.</p>
<p>And trust is something you have to earn repeatedly. Not through big speeches or promises, but through the ordinary things you do every day.</p>
<p>I still get scared about what I'm responsible for. I still question whether I'm doing enough. I still have a lot to learn.</p>
<p>But I don't want that fear to become a reason to avoid responsibility.</p>
<p>Because these aren't just people helping me build something. They're people choosing to be part of it. And I want to become someone worthy of that choice.</p>
<p>Maybe I'll become a better leader with time. Maybe I'll look back at the way I manage things today and realise how much I got wrong.</p>
<p>For now, I'm learning.</p>
<p>And perhaps that's what bravery looks like at this stage of my life.</p>
<p>Not having everything under control.</p>
<p>Just being afraid, understanding what's at stake, and choosing to show up anyway.</p>`
  }
];
