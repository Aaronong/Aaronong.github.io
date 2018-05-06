webpackJsonp([0x5c5575bd356f],{598:function(n,a){n.exports={data:{markdownRemark:{excerpt:"Many of the questions we got following the public launch of React revolved\naround  props , specifically that people wanted to do validation and to make\nsure their components had sensible defaults. Validation Oftentimes you want to validate your…",html:'<p>Many of the questions we got following the public launch of React revolved\naround <code>props</code>, specifically that people wanted to do validation and to make\nsure their components had sensible defaults.</p>\n<h2>Validation</h2>\n<p>Oftentimes you want to validate your <code>props</code> before you use them. Perhaps you\nwant to ensure they are a specific type. Or maybe you want to restrict your prop\nto specific values. Or maybe you want to make a specific prop required. This was\nalways possible — you could have written validations in your <code>render</code> or\n<code>componentWillReceiveProps</code> functions, but that gets clunky fast.</p>\n<p>React v0.4 will provide a nice easy way for you to use built-in validators, or\nto even write your own.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-js"><code>React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  propTypes<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// An optional string prop named "description".</span>\n    description<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n\n    <span class="token comment">// A required enum prop named "category".</span>\n    category<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'News\'</span><span class="token punctuation">,</span><span class="token string">\'Photos\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n\n    <span class="token comment">// A prop named "dialog" that requires an instance of Dialog.</span>\n    dialog<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Dialog<span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Default Values</h2>\n<p>One common pattern we\'ve seen with our React code is to do something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-js"><code>React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token string">"default value"</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Do this for a few <code>props</code> across a few components and now you have a lot of\nredundant code. Starting with React v0.4, you can provide default values in a\ndeclarative way:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-js"><code>React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  getDefaultProps<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'default value\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We will use the cached result of this function before each <code>render</code>. We also\nperform all validations before each <code>render</code> to ensure that you have all of the\ndata you need in the right form before you try to use it.</p>\n<hr>\n<p>Both of these features are entirely optional. We\'ve found them to be\nincreasingly valuable at Facebook as our applications grow and evolve, and we\nhope others find them useful as well.</p>',frontmatter:{date:"July 12, 2017",path:"propvalid",title:"New in React v0.4: Prop Validation and Default Values"}}},pathContext:{id:"propvalid"}}}});
//# sourceMappingURL=path---blog-propvalid-2488d47d6190d425c831.js.map