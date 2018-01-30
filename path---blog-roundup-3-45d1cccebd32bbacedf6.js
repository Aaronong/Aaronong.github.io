webpackJsonp([0xe696c99eee18],{595:function(n,t){n.exports={data:{markdownRemark:{excerpt:"The highlight of this week is that an interaction-heavy app has been ported to\nReact. React components are solving issues they had with nested views. Moving From Backbone To React Clay Allsopp  successfully ported\n Propeller , a\nfairly big…",html:'<p>The highlight of this week is that an interaction-heavy app has been ported to\nReact. React components are solving issues they had with nested views.</p>\n<h2>Moving From Backbone To React</h2>\n<p><a href="https://twitter.com/clayallsopp">Clay Allsopp</a> successfully ported\n<a href="http://usepropeller.com/blog/posts/from-backbone-to-react/">Propeller</a>, a\nfairly big, interaction-heavy JavaScript app, to React.</p>\n<blockquote>\n<p><a href="http://usepropeller.com/blog/posts/from-backbone-to-react/"></a>Subviews\ninvolve a lot of easy-to-forget boilerplate that Backbone (by design) doesn\'t\nautomate. Libraries like Backbone.Marionette offer more abstractions to make\nview nesting easier, but they\'re all limited by the fact that Backbone\ndelegates how and went view-document attachment occurs to the application\ncode.</p>\n<p>React, on the other hand, manages the DOM and only exposes real nodes at\nselect points in its API. The "elements" you code in React are actually\nobjects which wrap DOM nodes, not the actual objects which get inserted into\nthe DOM. Internally, React converts those abstractions into actual DOMElements\nand fills out the document accordingly. [...]</p>\n<p>We moved about 20 different Backbone view classes to React over the past few\nweeks, including the live-preview pane that you see in our little iOS demo.\nMost importantly, it\'s allowed us to put energy into making each component\nwork great on its own, instead of spending extra cycles to ensure they\nfunction in unison. For that reason, we think React is a more scalable way to\nbuild view-intensive apps than Backbone alone, and it doesn\'t require you to\ndrop-everything-and-refactor like a move to Ember or Angular would demand.</p>\n<p><a href="http://usepropeller.com/blog/posts/from-backbone-to-react/">Read the full\npost...</a></p>\n</blockquote>\n<h2>Grunt Task for JSX</h2>\n<p><a href="https://ericclemmons.github.io/">Eric Clemmons</a> wrote a task for\n<a href="http://gruntjs.com/">Grunt</a> that applies the JSX transformation to your\nJavaScript files. It also works with <a href="http://browserify.org/">Browserify</a> if you\nwant all your files to be concatenated and minified together.</p>\n<blockquote>\n<p>Grunt task for compiling Facebook React\'s .jsx templates into .js</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code>grunt<span class="token punctuation">.</span><span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  react<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span> extension<span class="token punctuation">:</span> <span class="token string">\'js\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      files<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">\'path/to/output/dir\'</span><span class="token punctuation">:</span> <span class="token string">\'path/to/jsx/templates/dir\'</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It also works great with <code>grunt-browserify</code>!</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code>browserify<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    transform<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'grunt-react\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>browserify <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  app<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    src<span class="token punctuation">:</span> <span class="token string">\'path/to/source/main.js\'</span><span class="token punctuation">,</span>\n    dest<span class="token punctuation">:</span> <span class="token string">\'path/to/target/output.js\'</span>\n</code></pre>\n      </div>\n<p><a href="https://github.com/ericclemmons/grunt-react">Check out the project ...</a></p>\n</blockquote>\n<h2>Backbone/Handlebars Nested Views</h2>\n<p><a href="http://joelburget.com/">Joel Burget</a> wrote a blog post talking about the way we\nwould write React-like components in Backbone and Handlebars.</p>\n<blockquote>\n<p>The problem here is that we\'re trying to maniplate a tree, but there\'s a\ntextual layer we have to go through. Our views are represented as a tree - the\nsubviews are children of CommentCollectionView - and they end up as part of a\ntree in the DOM. But there\'s a Handlebars layer in the middle (which deals in\nflat strings), so the hierarchy must be destructed and rebuilt when we render.</p>\n<p>What does it take to render a collection view? In the Backbone/Handlebars view\nof the world you have to render the template (with stubs), render each subview\nwhich replaces a stub, and keep a reference to each subview (or anything\nwithin the view that could change in the future).</p>\n<p>So while our view is conceptually hierarchical, due to the fact that it has to\ngo through a flat textual representation, we need to do a lot of extra work to\nreassemble that structure after rendering.</p>\n<p><a href="http://joelburget.com/react/">Read the full post...</a></p>\n</blockquote>\n<h2>JSRomandie Meetup</h2>\n<p><a href="https://twitter.com/renajohn/">Renault John Lecoultre</a> from\n<a href="http://www.bugbuster.com">BugBuster</a> did a React introduction talk at a JS\nmeetup called <a href="https://twitter.com/jsromandie">JS Romandie</a> last week.</p>\n<script async class="speakerdeck-embed" data-id="888a9d50c01b01300df36658d0894ac1" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>\n<h2>CoffeeScript integration</h2>\n<p><a href="http://blog.vjeux.com/">Vjeux</a> used the fact that JSX is just a syntactic sugar\non-top of regular JS to rewrite the React front-page examples in CoffeeScript.</p>\n<blockquote>\n<p>Multiple people asked what\'s the story about JSX and CoffeeScript. There is no\nJSX pre-processor for CoffeeScript and I\'m not aware of anyone working on it.\nFortunately, CoffeeScript is pretty expressive and we can play around the\nsyntax to come up with something that is usable.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token punctuation">{</span>div<span class="token punctuation">,</span> h3<span class="token punctuation">,</span> textarea<span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">DOM</span>\n<span class="token punctuation">(</span>div <span class="token punctuation">{</span>className<span class="token punctuation">:</span> <span class="token string">\'MarkdownEditor\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">(</span>h3 <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'Input\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>textarea <span class="token punctuation">{</span>onKeyUp<span class="token punctuation">:</span> @handleKeyUp<span class="token punctuation">,</span> ref<span class="token punctuation">:</span> <span class="token string">\'textarea\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    @state<span class="token punctuation">.</span>value\n  <span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><a href="http://blog.vjeux.com/2013/javascript/react-coffeescript.html">Read the full\npost...</a></p>\n</blockquote>\n<h2>Tutorial in Plain JavaScript</h2>\n<p>We\'ve seen a lot of people comparing React with various frameworks. <a href="http://ricardo.cc/">Ricardo\nTomasi</a> decided to re-implement the tutorial without any\nframework, just plain JavaScript.</p>\n<blockquote>\n<p>Facebook &#x26; Instagram launched the React framework and an accompanying\ntutorial. Developer Vlad Yazhbin decided to rewrite that using AngularJS. The\nend result is pretty neat, but if you\'re like me you will not actually\nappreciate the HTML speaking for itself and doing all the hard work. So let\'s\nsee what that looks like in plain javascript.</p>\n<p><a href="http://ricardo.cc/2013/06/07/react-tutorial-rewritten-in-plain-javascript.html">Read the full\npost...</a></p>\n</blockquote>',frontmatter:{date:"July 12, 2017",path:"roundup3",title:"Community Round-up #3"}}},pathContext:{id:"roundup3"}}}});
//# sourceMappingURL=path---blog-roundup-3-45d1cccebd32bbacedf6.js.map