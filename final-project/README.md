# FP4 - Final Project Writeup
## Part 1: Project Description
The purpose of my website is to serve as a portfolio showcasing the projects I’ve worked on. It’s a place where I highlight my skills, creativity, and professional journey. By presenting my work, I aim to give viewers insight into my experience and problem-solving approach, making it easier for them to understand my capabilities.

The website provides detailed information about my projects, emphasizing the design process, reflections, and key takeaways. Each project outlines the challenges I faced, the steps I took to overcome them, and the lessons I learned along the way. This structured approach helps to paint a clear picture of my thought process and growth as a designer.

To make the website engaging and user-friendly, I focused on intuitive navigation. One key feature is a floating bookmark on the navigation bar, allowing users to quickly skip to or revisit different sections without the hassle of scrolling endlessly. Additionally, I incorporated animated libraries to add visual flair, such as highlighting important keywords and creating smooth transitions. These elements not only enhance the overall aesthetic but also improve the browsing experience by drawing attention to critical details.

The primary audience for my website is tech recruiters who are evaluating candidates for design roles. The layout, design, and content are all tailored to appeal to professionals in this field, focusing on presenting my work in a concise, impactful, and visually engaging manner.

## Part 2: User Interaction

Navigational interaction:
Hover: Hover over university logos | Hover over navigational elements | Hover over project tiles
Scroll: Scroll down to the projects > navigational elements moves up to nav bar at the top for easier access | Scroll down to one of the project page > floating bookmark appears at the top nav bar

## Part 3: External Tool
AOS animate: https://michalsnik.github.io/aos/
Why did you choose to use it over other alternatives? (2 sentences max)
It is lightweight and easy to use with a range of scroll-based animations with minimal setup. It's also customizable where I could control animation timing, duration, and offsets without bloating the website's performance.

How you used it? (2 sentences max)
Extracted the CDN from the library's github documentation and added the animation attribute data-aos="fade-right" to the HTML element after initializing AOS in JavaScript.

What does it add to your website? (2 sentences max)
Provides a smoother user experience and is more engaging than a static website that displays everything at once. It allows users to focus on specific sections as they scroll down.

Rough Notation: https://roughnotation.com/
Why did you choose to use it over other alternatives? (2 sentences max)
It is lightweight and focuses specifically on creating playful and visually appealing annotations, making it perfect for highlighting content without overwhelming the user. Unlike other animation libraries, it offers unique styles like underlines, boxes, and strikethroughs, which add personality and draw attention in a subtle yet engaging way. 

How you used it? (2 sentences max)
Used an unpkg JavaScript link from its documentation in the HTML, then created a span with classes around keywords in the HTML after initializing.

What does it add to your website? (2 sentences max)
Draws attention to keywords like business strategy and research that cannot be effectively emphasized using only text size and weight.

TypeIt: https://www.typeitjs.com/
Why did you choose to use it over other alternatives? (2 sentences max)
It offers a smooth typing animation that feels more natural and interactive compared to other libraries. Unlike other animation libraries, it focuses solely on text interactions, providing a clean experience that enhances user engagement without overwhelming the page.

How you used it? (2 sentences max)
Extracted the CDN from the library's github documentation and added the animation attribute  to the HTML element after initializing and defining the animated text in strings in JavaScript.

What does it add to your website? (2 sentences max)
It adds to the aesthetics and overall feel of the typeface on the About Me page.

Kursor: https://lusaxweb.github.io/Kursor/
Why did you choose to use it over other alternatives? (2 sentences max)
It enhances the interactive experience and allows for easy integration and customization.

How you used it? (2 sentences max)
Extracted the CDN from the library's github documentation after initializing and defining the animated text in strings in JavaScript.

What does it add to your website? (2 sentences max)
It matches the design aesthetic of the website. Unlike standard static cursors, it adds a unique touch that can capture attention and create a memorable user experience.

World Clock API

Why did you choose to use it over other alternatives? (2 sentences max)
Considering that recruiters could be anywhere in the world, I wanted to integrate and display the real-time time in my location, along with what I might be doing at that moment.

How you used it? (2 sentences max)
Fetched the current time in the "America/New_York" timezone by sending a GET request to the endpoint http://worldtimeapi.org/api/timezone/America/New_York. Created a Date object by parsing the response. This Date object was used to determine the current hour and day of the week, which helped customize the message displayed to the user based on whether it’s a weekend or a weekday using if statement.

What does it add to your website? (2 sentences max)
 customized the text to show the time and location in order to minimize the distance a recruiter might feel when viewing a digital screen. My goal was to help them imagine what I might be doing at that moment as they consider reaching out, and to present myself as a person rather than just another portfolio.

## Part 4: Design Iteration
The final design differs significantly from my initial proposal. During implementation, I realized it would be challenging to make it responsive while still conveying the message I intended. Additionally, coming from diverse backgrounds became a secondary point, not one that should dominate the layout, which is why I opted for more text rather than a large image. I also planned to add a floating bookmark on the side, but the margin wasn't wide enough to accommodate it, and the issue became even more pronounced on smaller screens. To address this, I added an interactive feature where the bookmark transforms into a horizontal bar that sits above the sticky nav bar when the user starts scrolling, providing a smooth experience for both desktop and mobile users.

## Part 5: Implementation Challenge
Adding more libraries increased the complexity of the website, especially in terms of JavaScript. Initially, I didn’t realize that the order of initialization could conflict with other libraries. For instance, initializing the Kursor library before the scroll interaction on the nav bar caused issues where the nav bar wasn’t showing, and the customized cursor wouldn’t appear either. This highlighted the importance of carefully managing the initialization sequence to avoid such conflicts. 
Although the website has many pages, many elements are shared across the screens, which made it challenging to manage the different elements and their respective names as the implementation progressed. As I added more functionality, keeping track of these shared components became more complex, requiring careful naming conventions and structure to ensure everything remained organized and functional.


## Part 6: Generative AI Use
Tool used: Chat GPT

| Tool name | Ratings | Design | Plan | Write Code | Debug |
|----------|----------|----------|----------|----------|----------|
| Chat GPT | Usage | No | No | No | Yes |
|  | Productivity | 1 | 1 | 4 | 6 |

What tools did you use, and how did you use them? (2-4 sentences max)
I primarily used ChatGPT to understand jargon in documentation and error messages while implementing various JavaScript libraries. I often copied and pasted my JavaScript code along with the error messages to identify where the bugs were. Based on the suggestions provided, I implemented each recommendation and used log messages to track the changes made to my code.

Describe your collaboration mode with Generative AI in the project. What components of your project were generated by AI, and what parts were authored by you? How do you critique or evaluate the AI-generated suggestions before incorporating them into your project? Provide examples of why you accepted or modified the AI-generated suggestions, especially in cases where the generated content influenced your final design. (4-8 sentences max)

I used Generative AI primarily for troubleshooting errors, understanding documentation for various javascript libraries, and brainstorming solutions to specific errors. AI helped me generate code snippets, clarify error messages, and suggest optimizations that sped up my development process. For example, when I encountered a bug while implementing a JavaScript library, I copied and pasted the error message into the AI to help me understand the issue. The AI provided me with potential fixes, but I always critiqued its suggestions by testing them in my code, understanding that it doesn't interfere with the interactions of other components. While I accepted many of the AI's suggestions, I modified some when they didn’t fit the specific context of my project, especially when the AI suggested overly generic solutions or missed important nuances in my code structure on CSS. In the end, I would use AI-generated content as a foundation but would tweak it based on my understanding of the project’s needs.

Reflect on the challenges and insights while using Generative AI tools in your project: Discuss the pros and cons of using these Generative AI tools. Does it match your expectations and plan in FP2?  How do you like it, does it make your projects (or what part of it) easier or harder? Include any surprises, limitations, or advantages you found. (4-8 sentences max)
Prompts and chat history links if applicable. 

Using Generative AI tools in my project helped me quickly troubleshoot issues, clarify technical jargon, and optimize code, making my learning process faster and more efficient. However, the AI sometimes provided responses that were too general or not fully applicable to my specific project, requiring me to manually adjust its suggestions. While it met my expectations for assisting with debugging and offering quick explanations, I found that it couldn't always provide context-aware solutions for complex code and interactions. Despite this, the AI helped improve the readability of my code and accelerated my understanding of JavaScript libraries and concepts. 

Note: I've used the same chat in Chat GPT for personal use as well and I won't be disclosing the entire chat. If you need screenshots, I'm more that happy to provide them to you!

Link to WAVE tool screenshots: https://lucychoi-jisoo.github.io/pui-homework/final-project/index.html



# FP2 - Evaluation of the Final Project
## Project Description
My final project is an interactive personal portfolio that showcases my past projects, uniquely branded to portray my personal story. I aim to craft this with recruiters as my target audience, designing an experience where key information is easily scannable and absorbable. This experience will blend durable code, intuitive navigation, user flow, and a clear visual hierarchy to ensure that recruiters can quickly access the most important information while highlighting my strengths as a product designer.

I’ll be specifically exploring JavaScript libraries to achieve seamless, user-friendly animations and interactions that personalize the user experience. These may include Pixi.js, jQuery, and possibly Processing.js.

## High-Fi Prototypes
### Prototype 1
![Variation 1](images/readme/PrototypeOne.png)

### Prototype 2
![Variation 2](images/readme/PrototypeTwo.png)

## Usability Test
For the usability test, I aimed to understand how the design of my homepage shapes the initial impression of me as a product designer and how effectively the navigation supports seamless movement across different sections and pages for recruiters and other users. I decided to use a think-aloud protocol, asking participants to complete simple tasks while observing their navigation and thought process.

Regarding first impressions, I received mainly positive feedback on the use of strong colors and the layout of both designs. A constructive criticism I received was that recruiters often have a single goal: to determine if the designer is a good fit for the product the organization is building. This led one participant to suggest that a minimalist layout (variation one) might serve this purpose better than the second, which incorporates more complex animations and interactions.

I also received feedback on the importance of visual signifiers. Participants mentioned that adding more visual contrast could help indicate which elements are clickable and interactive. While I will consider this, I’m cautious about using too much color contrast, as I want to reserve bold colors for highlighting key information in my project storytelling. I believe there are alternative ways to make actions more intuitive, such as using iconography or micro-interactions. Additionally, I plan to enhance scroll affordances by cropping project previews within the screen’s viewport to signal that more projects are available below.

On navigation, some participants suggested adding a bottom navigation bar with links to my existing projects or ways to contact me, such as email and resume links. I think this is a great idea, as fixed bottom navigation would complete the user journey without leaving them at a dead-end.

## Updated Design
![Portfolio sketches](images/readme/IdeaOne.png)

Based on the feedback I received, I decided to enhance the visual hierarchy on my homepage introduction by using different font weights to distinguish various types of information. I also diversified the layout of the project thumbnails to create more visual interest, given that I'm using a single accent color for emphasis. Although there were suggestions to add more accent colors, I opted to keep just one to highlight the most important elements and maintain a clean, minimalistic design.

Additionally, I increased the scroll affordance by cropping the thumbnails on the second row. This visual cue helps signal to recruiters that there are more projects to explore as they scroll down the page.

![Portfolio sketches](images/readme/IdeaOne.png)

On the second page, I enhanced the navigation flow by adding a "back to project" button, making it more intuitive for users to understand the outcome of their actions. To further improve navigation, I also included a footer with links to my contact information, completing the experience loop and guiding users back to the discovery and exploration phases.

Additionally, I improved the bookmarks for different sections by fixing their position on the screen. Now, they remain accessible within the viewport as users scroll through the project, ensuring easy access to each section at any point in their browsing experience.

## Feedback Summary

Based on the usability test feedback, I refined my portfolio design to improve both user experience and visual appeal. Participants were positive about the strong color usage and layout, but one suggested that a minimalist layout might serve recruiters better by focusing solely on whether I’m a good fit for their needs. This led me to adjust the visual hierarchy on the homepage, using font weight variations to differentiate information more clearly. I also diversified the layout of project thumbnails to create visual interest while maintaining a single accent color for a clean, focused look. Participants highlighted the need for clearer visual cues on clickable elements, so I’ll explore alternatives to bold colors, like iconography or micro-interactions, to maintain emphasis on key content. I also enhanced scroll affordance by cropping thumbnails on the second row, subtly indicating more content below. To support a smooth navigation experience, I added a “back to project” button on project pages and included a footer with contact links, avoiding dead-ends and completing the user journey. Finally, I fixed section bookmarks to remain accessible within the viewport as users scroll, enabling easy access to all sections.

## Milestones
### Implementation Plan
- [ ] Week 10 Nov 4 - Nov 8:
    - [ ] FP2 due
    - [ ] Finalize prototype and wireframes
    - [ ] Create skeletal structure of the website pages

- [ ] Week  11 Nov 11 - Nov 15:
    - [ ] Research about how the selected library can be incoporated into the portfolio
    - [ ] Implement finalized Javascript library

- [ ] Week  12 Nov 18 - Nov 22:
    - [ ] Finalize implementation of Javascript library
    - [ ] Implement finalized Web API

- [ ] Week  13 Nov 25 - Nov 29:
    - [ ] Finalize implementation of chosen Web API

- [ ] Week  14 Dec 2 - Dec 6:
    - [ ] FP2 due
    

# FP1 - Proposal for Critique
## Idea Sketches
### Idea One
![Portfolio sketches](images/readme/IdeaOne.png)
Personal Portfolio

A unique, branded portfolio that showcases my past projects to product designs recruiters in the b2c tech sector. 

My personal portfolio is going to be utlizing the unique aspects of digital websites in ways that animates components based on user interaction. The landing page will imitate the layout of my resume, and it will include a timeline with projects that appear aas users scroll. This way, recruiters are viewing my career achievements and projects in one interaction without having to download and view a separate resume. I’ll also be including progress bars to inform users on the amount of content that’s left based on the scroll position.

In terms of accessibility, I’ll create a simplified version on mobile so that the animation does not disrupt the user experience for people when they are on their phones. I’ll also adjust dimensions of the components based on screensize so that texts are legible, while coding using as many semantics as possible for the visually impaired. 

As users interact with my website, I want users to takeaway my key strength and how I can be a valuable asset to the company. In order to acheive this, I would have to analyze components in a very strategic way, for example by using gestalt principles, to give clear visual cues on the information I want to highlight.

### Idea Two
![Israel-Palestine conflict sketches](images/readme/IdeaTwo.png)
Israel-Palestine conflict

An interactive storytelling that informs users about the Israel-Palestine conflict by using data visualization to help them empathize beyond what numbers can do.

The Israel-Palestine conflict will take users through a series of screens to help them gain context of the conflict. It will then land them on an interactive data visualization page where numbers  are creatively and visually represented to get the intensity of the message across. Users will have moderate level of control on the website on select the specfici data they wish to learn more about. 

In terms of accessibility, I’ll need to create a data visualization that is not too complex for people with cognitive disability. There should be enough color contrast to ensure that information can be perceived clearly for people with visual disabilities.

### Idea Three
![Cafe Hopping in Pittsburgh sketches](images/readme/IdeaThree.png)
Cafe Hopping in Pittsburgh

An interactive gallery of cassette tapes that have unique designs based on the playlist of songs, specifically and manually curated based on popular cafes in Pittsburgh.

When user hovers over the cassette an exerpt of the song will play automatically and clicking it will take users to an informative page about the cafe with images and descriptions. It will also have reviews and locations that calculates the distance from their current location using API integration.

The website will have responsive design where the layout of cassette gallery changes in the number of columns displayed based on the viewport of devices. Since hover doesn’t work on mobiles, buttons will be used as visual cues to guide users on the controls they have.

## Feedback Summary
Through speed dating, my first idea—a personal portfolio—and my second—the Israeli-Palestinian conflict—received the most feedback. Out of the three project layouts I presented, the interactive resume generated the most positive reactions, as it broke away from the standard portfolio landing pages common among product designers. However, a risk noted was that projects are displayed one at a time as users scroll, which limits project visibility and is a trade-off I’d need to consider. The second idea also received considerable critique. Many people resonated with my motivation, but they raised concerns about the project’s timeframe, particularly the extensive research and fact-checking required against diverse sources, which would be time-consuming. Since this idea involves data visualization, they also suggested taking a more creative approach, making the visualizations contextually aligned with the narrative rather than relying solely on standard graphs and charts.

## Feedback Digestion
Based on the feedback I received, I've decided to create a personal portfolio with an interactive resume layout. This approach not only allows me to showcase my experience and skills but also opens up space for more experimental design choices. One area I’m particularly interested in exploring is the role of animation in enhancing user experience. I believe that incorporating subtle animations can make my portfolio feel more engaging and interactive, guiding the viewer’s attention naturally from one section to another.

One suggestion from a peer was to design the interactive resume as a component that could be embedded within my existing portfolio as a dedicated “resume” page. While this would integrate my code with a third-party platform, which is an interesting idea I hadn’t initially thought of, I’m inclined to focus on creating a standalone landing page instead. Using it as a landing page would allow me to deliver a more impactful first impression by presenting both my portfolio and resume in a unified format. This way, recruiters can experience my skills and style holistically, without needing to navigate away from the initial view.
