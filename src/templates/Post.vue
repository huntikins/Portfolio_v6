<template>
  <Layout>
    <div class="post_page">
      <h1>{{$page.post.title}}</h1>
      <small ><span>{{$page.post.date}}</span>&nbsp;&mdash;&nbsp;<span>{{$page.post.timeToRead}} min read</span></small>
      <hr>
      <article v-html="$page.post.content"/>
      <div class="post_page-footer">
        <p>If you liked this article or have questions of comments feel free to reach out on twitter <a href="https://twitter.com/trammellwebdev" target="_blank" rel="noopener">@trammellwebdev</a></p>
      </div>
    </div>
  </Layout>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
   metaInfo() {
      return {
        title: this.$page.post.title,
        description: this.$page.post.description,
        keywords: 'web development, javascript, html, vue, react, front-end, back-end, full-stack, coding',
        openGraph: {
          title: this.$page.post.title,
          type: 'article',
          description: this.$page.post.description
        },
        meta: [
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: this.$page.post.title },
          { name: "twitter:description", content: this.$page.post.description },
          { name: "twitter:site", content: this.$page.meta.twitter }, 
          { name: "twitter:image", content: this.$page.post.image },
          { name: "twitter:creator", content: this.$page.meta.twitter },
        ]
      }
   }
};
</script>


<page-query>
query Post ($path: String!) {
  meta: metadata {
    siteName
    siteDescription
    twitter
  }
   post: post (path: $path) {
    id
    title
    image
    description
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style lang="scss">
.post_page {
  padding: 2rem 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
      width: 750px;
  }
  @media (min-width: 992px) {
      width: 970px;
  }
  @media (min-width: 1200px) {
      width: 1170px;
  }
  h1 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 0;
    color: teal;
  }
  small {
    display: block;
    text-align: center;
  }
  hr {
    margin: 2rem 0 4rem;
  }
 h2 {
   padding-top: 1rem;
   text-transform: capitalize;
 }
 blockquote {
   padding-left: 1rem;
   font-style: italic;
   border-left: 4px solid teal;
   line-height: 1.20;
   font-size: 14px;
   color: teal;
 }
 p {
   a {
     font-weight: 900 !important;
     color: teal !important;
     text-decoration: none !important;
     transition: .25s all ease-in-out;
     border-bottom: 2px solid transparent !important;
     &:hover {
       color: gray !important;
       text-decoration: none;
       border-bottom: 2px solid gray !important;
     }
   }
 }
 &-footer {
   p {
     padding-top: 2rem;
     text-align: center;
     font-style: italic;
     font-size: 18px;
     width: 50%;
     margin: 0 auto;
   }
 }
 article {
   code[class*="language-"],
pre[class*="language-"] {
	color: #f92aad;
	text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background-color: transparent !important;
	background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #8e8e8e;
}

.token.punctuation {
	color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.number,
.token.unit,
.token.hexcode,
.token.deleted {
	color: #e2777a;
}

.token.property,
.token.selector {
	color: #72f1b8;
	text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475;
}

.token.function-name {
	color: #6196cc;
}

.token.boolean,
.token.selector .token.id,
.token.function {
	color: #fdfdfd;
	text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975;
}

.token.class-name {
	color: #fff5f6;
	text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75;
}

.token.constant,
.token.symbol {
	color: #f92aad;
	text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
}

.token.important,
.token.atrule,
.token.keyword,
.token.selector .token.class,
.token.builtin {
	color: #f4eee4;
	text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
}
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
  background: unset !important; 
}
.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
	color: #f87c32;
}

.token.operator,
.token.entity,
.token.url {
	color: #67cdcc;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.inserted {
	color: green;
}
 }
}
</style>
