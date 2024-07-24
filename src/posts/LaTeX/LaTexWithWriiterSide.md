# LaTeX powered by WriterSide

> 为什么使用Writerside:
>
> 笔者比较喜欢用Vim模式编辑文本，并且尝试过不少的编辑器如TeX Studio、VSCode以及NEOVIM。但对于我来说他们都或多或少存在着一些问题
>
> * TeX Studio：外观实在是欣赏不来
> * NEOVIM：主题长时间看着很累，也没有找到比较心仪的主题，且配置繁琐麻烦（主要是懒得翻文档看hhh）
> * VSCode：长期使用了一段时间，但是VSCode的Vim插件实在是不够给力，文档大的时候顿感极强，难以忍受。VSCode neovim插件也不尽如人意，配置感觉相当麻烦。
>
> 但是对于Writerside而言，配置编译LaTeX只需下载一个插件然后稍微动动手配置两个选项即可，ideavim插件做的也相当不错，因此我最后还是选用了Writerside。
>
> 但Writerside让我不是很满意的地方在于：
>
> 1. 占用内存比较大
> 2. LaTeX插件不知道为什么无法识别TeX live中的cls文件。\documentclass{article}会报错。但这一点对笔者来说影响不大，一般情况都是用的自己写的.cls文件

#### 1.安装Writerside

WritterSide是JetBrains公司开发的一款为文档书写而生的“IDE”

下载网址如下：

https://www.jetbrains.com/writerside/

### 2.安装插件

由于Writerside并没有内置对LaTeX文档的支持，因此我们必须在安装完成后下载相应的插件。

![download_plugins](https://nomore.blob.core.windows.net/image/download_plugins.png)

![plugins](https://nomore.blob.core.windows.net/image/plugins.png)

TeXFy IDEA:提供对LaTeX的相关支持（==必选==）

CSV Ediotr:该插件用来阅读和修改CSV文件（可选）

Diagrams.net Integration:可以在Writerside内部使用原draw.io优雅的绘图（可选）

GitHub Copilot:提供强大的自动补全、错误修复以及AI问答功能（可选）

IdeaVim:提供Vim模式（可选）

Rainbow Brackets:让括号如彩虹一般美观易于辨识（可选）

VSCode Keymap:提供VSCODE快捷键位（可选）

下载完成后，重启Writerside

### 3.开始写作

创建一个空的文件夹然后用Writerside打开即可

![new_project](https://nomore.blob.core.windows.net/image/new_project.png)

右键点击箭头指向区域，新建LaTeX文件即可

![new_latex_file](https://nomore.blob.core.windows.net/image/new_late_file.png)

然后就可以需要配置如何编译，点击导航栏中的新增配置

![configure_steps](https://nomore.blob.core.windows.net/image/steps.png)

点击Ok即可完成配置，然后点击运行即可。

> * 如果引用了文献,还需要额外配置BibTeX编译配置，然后将其作为外部选项添加到当前编译配置中。
> * 可以选择不需要PDF查看器，然后再下载PDF viewer插件，在Writerside内部查看PDF！
