import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-KYCnlICv.js";const t="/Blog/assets/code-qgwkgM4M.png",p={},o=e(`<h1 id="latex" tabindex="-1"><a class="header-anchor" href="#latex"><span>LaTex</span></a></h1><blockquote><p>编译环境：VSCODE + TexLive + LaTeX WorkShop</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>  <span class="token property">&quot;latex-workshop.latex.autoBuild.run&quot;</span><span class="token operator">:</span><span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;latex-workshop.message.error.show&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;latex-workshop.message.warning.show&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;latex-workshop.latex.recipes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xelatex&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;xelatex&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pdflatex&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;pdflatex&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;latex-workshop.latex.tools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xelatex&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xelatex&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;-synctex=1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-interaction=nonstopmode&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-file-line-error&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;%DOCFILE%&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pdflatex&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pdflatex&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;-synctex=1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-interaction=nonstopmode&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-file-line-error&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;%DOC%&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将 tools 中的 <code>%DOC%</code>替换成<code>%DOCFILE%</code>就可以支持编译<strong>中文路径下的文件了</strong>）</li><li>中文环境常用的是<mark>xelatex</mark></li><li>第一个 recipe 为默认的编译工具。但如果单击某个 recipe 然后再点击运行也可以用来切换编译方式。</li></ul><h2 id="一-基础知识" tabindex="-1"><a class="header-anchor" href="#一-基础知识"><span>一. 基础知识</span></a></h2><h3 id="_1-1-文档类型" tabindex="-1"><a class="header-anchor" href="#_1-1-文档类型"><span>1.1 文档类型</span></a></h3><ul><li><p>对于英文，可以用<mark>book</mark>、<mark>article</mark>、和<mark>beamer</mark>；</p></li><li><p>对于中文，可以用<mark>ctextbook</mark>、<mark>ctexart</mark>、和<mark>ctexbeamer</mark>；</p></li></ul><p>不同的文件类型，编写的过程也会有一定的差异，直接修改文件类型可能会报错</p><p>设置文件类型：</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">{</span><span class="token keyword">ctexart</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外还可以在==\\documentclass==处设置基本参数</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">[</span>12pt,a4paper,oneside<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">ctexart</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件的正文部分需要放在 document 环境中，在 document 环境外的部分不会出现在文件中</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">[</span>12pt, a4paper, oneside<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">ctexart</span><span class="token punctuation">}</span>

<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>

这里是正文.

<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-宏包" tabindex="-1"><a class="header-anchor" href="#_1-2-宏包"><span>1.2 宏包</span></a></h3><p>为了完成一些功能（如定理环境），还需要在导言区，也即 document 环境之前加载宏包。加载宏包的代码是<code>\\usepackage{}</code>。本份教程中，与数学公式与定理环境相关的宏包为<code>amsmath</code>、<code>amsthm</code>、<code>amssymb</code>，用于插入图片的宏包为<code>graphicx</code>，代码如下：</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\usepackage</span><span class="token punctuation">{</span><span class="token keyword">amsmath, amsthm, amssymb, graphicx</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外，在加载宏包时还可以设置基本参数，如使用超链接宏包<code>hyperref</code>，可以设置引用的颜色为黑色等，代码如下：</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\usepackage</span><span class="token punctuation">[</span>bookmarks=true, colorlinks, citecolor=blue, linkcolor=black<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">hyperref</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-标题" tabindex="-1"><a class="header-anchor" href="#_1-3-标题"><span>1.3 标题</span></a></h3><p>标题可以用<code>\\title{}</code>设置，作者可以用<code>\\author</code>设置，日期可以用<code>\\date{}</code>设置，这些都需要放在导言区。为了在文档中显示标题信息，需要使用<code>\\maketitle</code>。例如：</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">[</span>12pt, a4paper, oneside<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">ctexart</span><span class="token punctuation">}</span>
<span class="token function selector">\\usepackage</span><span class="token punctuation">{</span><span class="token keyword">amsmath, amsthm, amssymb, graphicx</span><span class="token punctuation">}</span>
<span class="token function selector">\\usepackage</span><span class="token punctuation">[</span>bookmarks=true, colorlinks, citecolor=blue, linkcolor=black<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">hyperref</span><span class="token punctuation">}</span>

<span class="token comment">% 导言区</span>

<span class="token function selector">\\title</span><span class="token punctuation">{</span>我的第一个<span class="token function selector">\\LaTeX</span> 文档<span class="token punctuation">}</span>
<span class="token function selector">\\author</span><span class="token punctuation">{</span>Dylaaan<span class="token punctuation">}</span>
<span class="token function selector">\\date</span><span class="token punctuation">{</span><span class="token function selector">\\today</span><span class="token punctuation">}</span>

<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>

<span class="token function selector">\\maketitle</span>

这里是正文.

<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-正文" tabindex="-1"><a class="header-anchor" href="#_1-4-正文"><span>1.4 正文</span></a></h3><p>正文可以直接在 document 环境中书写，没有必要加入空格来缩进，因为文档默认会进行首行缩进。相邻的两行在编译时仍然会视为同一段。在 LaTeX 中，另起一段的方式是使用一行相隔，例如：</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code>我是第一段.

我是第二段.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样编译出来就是两个段落。在正文部分，多余的空格、回车等等都会被自动忽略，这保证了全文排版不会突然多出一行或者多出一个空格。另外，另起一页的方式是：</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\newpage</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>直立</th><th>\\textup{}</th></tr></thead><tbody><tr><td>意大利</td><td>\\textit{}</td></tr><tr><td>倾斜</td><td>\\textsl{}</td></tr><tr><td>小型大写</td><td>\\textsc{}</td></tr><tr><td>加宽加粗</td><td>\\textbf{}</td></tr></tbody></table><h3 id="_1-5-章节" tabindex="-1"><a class="header-anchor" href="#_1-5-章节"><span>1.5 章节</span></a></h3><p>对于<code>ctexart</code>文件类型，章节可以用<code>\\section{}</code>和<code>\\subsection{}</code>命令来标记，例如：</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">[</span>12pt, a4paper, oneside<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">ctexart</span><span class="token punctuation">}</span>
<span class="token function selector">\\usepackage</span><span class="token punctuation">{</span><span class="token keyword">amsmath, amsthm, amssymb, graphicx</span><span class="token punctuation">}</span>
<span class="token function selector">\\usepackage</span><span class="token punctuation">[</span>bookmarks=true, colorlinks, citecolor=blue, linkcolor=black<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">hyperref</span><span class="token punctuation">}</span>

<span class="token comment">% 导言区</span>

<span class="token function selector">\\title</span><span class="token punctuation">{</span>我的第一个<span class="token function selector">\\LaTeX</span> 文档<span class="token punctuation">}</span>
<span class="token function selector">\\author</span><span class="token punctuation">{</span>Dylaaan<span class="token punctuation">}</span>
<span class="token function selector">\\date</span><span class="token punctuation">{</span><span class="token function selector">\\today</span><span class="token punctuation">}</span>

<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>

<span class="token function selector">\\maketitle</span>

<span class="token function selector">\\section</span><span class="token punctuation">{</span><span class="token headline class-name">一级标题</span><span class="token punctuation">}</span>

<span class="token function selector">\\subsection</span><span class="token punctuation">{</span><span class="token headline class-name">二级标题</span><span class="token punctuation">}</span>

这里是正文.

<span class="token function selector">\\subsection</span><span class="token punctuation">{</span><span class="token headline class-name">二级标题</span><span class="token punctuation">}</span>

这里是正文.

<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-目录" tabindex="-1"><a class="header-anchor" href="#_1-6-目录"><span>1.6 目录</span></a></h3><p>在有了章节的结构之后，使用<code>\\tableofcontents</code>命令就可以在指定位置生成目录。通常带有目录的文件需要编译两次，因为需要先在目录中生成.toc 文件，再据此生成目录。</p><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">[</span>12pt, a4paper, oneside<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">ctexart</span><span class="token punctuation">}</span>
<span class="token function selector">\\usepackage</span><span class="token punctuation">{</span><span class="token keyword">amsmath, amsthm, amssymb, graphicx</span><span class="token punctuation">}</span>
<span class="token function selector">\\usepackage</span><span class="token punctuation">[</span>bookmarks=true, colorlinks, citecolor=blue, linkcolor=black<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">hyperref</span><span class="token punctuation">}</span>

<span class="token comment">% 导言区</span>

<span class="token function selector">\\title</span><span class="token punctuation">{</span>我的第一个<span class="token function selector">\\LaTeX</span> 文档<span class="token punctuation">}</span>
<span class="token function selector">\\author</span><span class="token punctuation">{</span>Dylaaan<span class="token punctuation">}</span>
<span class="token function selector">\\date</span><span class="token punctuation">{</span><span class="token function selector">\\today</span><span class="token punctuation">}</span>

<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>

<span class="token function selector">\\maketitle</span>

<span class="token function selector">\\tableofcontents</span>

<span class="token function selector">\\section</span><span class="token punctuation">{</span><span class="token headline class-name">一级标题</span><span class="token punctuation">}</span>

<span class="token function selector">\\subsection</span><span class="token punctuation">{</span><span class="token headline class-name">二级标题</span><span class="token punctuation">}</span>

这里是正文.

<span class="token function selector">\\subsection</span><span class="token punctuation">{</span><span class="token headline class-name">二级标题</span><span class="token punctuation">}</span>

这里是正文.

<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-图片" tabindex="-1"><a class="header-anchor" href="#二-图片"><span>二. 图片</span></a></h2><p>在 LaTeX 中插入图片通常需要使用 <code>\\includegraphics</code> 命令，该命令需要在导言区添<code>\\usepackage{graphicx}</code> 以使用相关的功能。图片所属文件夹 image 和.tex 文件同级</p><figure><img src="`+t+'" alt="code" tabindex="0" loading="lazy"><figcaption>code</figcaption></figure><p>在这个例子中：</p><ul><li><code>\\includegraphics</code> 命令用于插入图片。你可以通过选项调整图片的大小、位置等。</li><li><code>figure</code> 环境用于包裹图片，并提供图形对象（如标题和标签）的位置控制。</li><li><code>\\caption</code> 命令用于给图片添加标题。</li><li><code>\\label</code> 命令用于为图片添加标签，方便在文档中引用。</li><li>htbp： <ul><li><code>h</code> 表示&quot;here&quot;，指示 LaTeX 将尽可能将浮动对象放置在代码所在的位置。</li><li><code>t</code> 表示&quot;top&quot;，指示 LaTeX 将浮动对象放置在页面的顶部。</li><li><code>b</code> 表示&quot;bottom&quot;，指示 LaTeX 将浮动对象放置在页面的底部。</li><li><code>p</code> 表示&quot;page&quot;，指示 LaTeX 将浮动对象放置在一个独立的页面上，该页面专门用于包含浮动对象。</li></ul></li></ul><p>这些选项通常以某种组合的形式使用，以指示 LaTeX 如何在文档中安排浮动对象的位置。LaTeX 根据一些因素（例如当前页面的空间、文档中其他浮动对象的位置等）来决定最终的放置位置。</p><p>你可以根据需要选择这些选项，或者将它们组合在一起，以便更好地控制浮动对象的位置。</p><h3 id="_2-1-调整图片尺寸" tabindex="-1"><a class="header-anchor" href="#_2-1-调整图片尺寸"><span>2.1 调整图片尺寸</span></a></h3><ul><li><p>使用 <code>width</code> 和 <code>height</code> 选项来缩小图片尺寸，使其适应页面大小。如上例</p></li><li><p>分割图片</p></li></ul>',43),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","latex.html.vue"]]),v=JSON.parse('{"path":"/posts/LaTeX/latex.html","title":"LaTex","lang":"zh-CN","frontmatter":{"description":"LaTex 编译环境：VSCODE + TexLive + LaTeX WorkShop 将 tools 中的 %DOC%替换成%DOCFILE%就可以支持编译中文路径下的文件了） 中文环境常用的是xelatex 第一个 recipe 为默认的编译工具。但如果单击某个 recipe 然后再点击运行也可以用来切换编译方式。 一. 基础知识 1.1 文档类...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Blog/posts/LaTeX/latex.html"}],["meta",{"property":"og:title","content":"LaTex"}],["meta",{"property":"og:description","content":"LaTex 编译环境：VSCODE + TexLive + LaTeX WorkShop 将 tools 中的 %DOC%替换成%DOCFILE%就可以支持编译中文路径下的文件了） 中文环境常用的是xelatex 第一个 recipe 为默认的编译工具。但如果单击某个 recipe 然后再点击运行也可以用来切换编译方式。 一. 基础知识 1.1 文档类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-24T02:29:32.000Z"}],["meta",{"property":"article:author","content":"jianwen"}],["meta",{"property":"article:modified_time","content":"2024-07-24T02:29:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LaTex\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-24T02:29:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jianwen\\",\\"url\\":\\"https://catlordx.github.io/Blog/\\"}]}"]]},"headers":[{"level":2,"title":"一. 基础知识","slug":"一-基础知识","link":"#一-基础知识","children":[{"level":3,"title":"1.1 文档类型","slug":"_1-1-文档类型","link":"#_1-1-文档类型","children":[]},{"level":3,"title":"1.2 宏包","slug":"_1-2-宏包","link":"#_1-2-宏包","children":[]},{"level":3,"title":"1.3 标题","slug":"_1-3-标题","link":"#_1-3-标题","children":[]},{"level":3,"title":"1.4 正文","slug":"_1-4-正文","link":"#_1-4-正文","children":[]},{"level":3,"title":"1.5 章节","slug":"_1-5-章节","link":"#_1-5-章节","children":[]},{"level":3,"title":"1.6 目录","slug":"_1-6-目录","link":"#_1-6-目录","children":[]}]},{"level":2,"title":"二. 图片","slug":"二-图片","link":"#二-图片","children":[{"level":3,"title":"2.1 调整图片尺寸","slug":"_2-1-调整图片尺寸","link":"#_2-1-调整图片尺寸","children":[]}]}],"git":{"createdTime":1707385879000,"updatedTime":1721788172000,"contributors":[{"name":"jianwen","email":"shelly2140306@163.com","commits":2},{"name":"Albert Caesor","email":"nomorezzz@163.com","commits":1}]},"readingTime":{"minutes":4.4,"words":1320},"filePathRelative":"posts/LaTeX/latex.md","localizedDate":"2024年2月8日","excerpt":"\\n<blockquote>\\n<p>编译环境：VSCODE + TexLive + LaTeX WorkShop</p>\\n</blockquote>\\n<div class=\\"language-json\\" data-ext=\\"json\\" data-title=\\"json\\"><pre class=\\"language-json\\"><code>  <span class=\\"token property\\">\\"latex-workshop.latex.autoBuild.run\\"</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"never\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"latex-workshop.message.error.show\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"latex-workshop.message.warning.show\\"</span><span class=\\"token operator\\">:</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"latex-workshop.latex.recipes\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"name\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"xelatex\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"tools\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n        <span class=\\"token string\\">\\"xelatex\\"</span>\\n      <span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"name\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"pdflatex\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"tools\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n        <span class=\\"token string\\">\\"pdflatex\\"</span>\\n      <span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"latex-workshop.latex.tools\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"name\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"xelatex\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"command\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"xelatex\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"args\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n        <span class=\\"token string\\">\\"-synctex=1\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"-interaction=nonstopmode\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"-file-line-error\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"%DOCFILE%\\"</span>\\n      <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"env\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"name\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"pdflatex\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"command\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"pdflatex\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"args\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n        <span class=\\"token string\\">\\"-synctex=1\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"-interaction=nonstopmode\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"-file-line-error\\"</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token string\\">\\"%DOC%\\"</span>\\n      <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"env\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">]</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,v as data};