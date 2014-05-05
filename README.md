By using the grunt-markdown-pdf(https://www.npmjs.org/package/grunt-markdown-pdf), I was able to convert markdown-file to PDF-file easily. (like Github's design)

## Install

### 1, Install node.js

http://nodejs.org

### 2, Git clone the repository.

```
// cd <your-work-directory>
git clone git@github.com:be-hase/markdown-to-pdf.git
```

### 3, Run `npm install` in the directory you cloned

```
npm install
```

Now complete.


## How to make a PDF

```
grunt
```

OK if you run with.

## By monitoring the file, to make the PDF automatically when the file is the save

```
grunt watch
```

If you run this command, to start the file monitoring.

### When you want to include a image in the PDF

Please place the image on the assets / images.  
And then, enter in the notation of markdown,

```
![hoge image]({{assets}}/images/hoge.png)
```

(Because absolute path of the directory is different for each user, before converting to markdown to HTML, replace the absolute path in the regular expression part that says {{assets}}.)