a-portfolio-site
===================
This is [my personal portfolio website](https://lu3xiang.top/a-portfolio-site/). It displays my featured work created during my studying for [Front-end Web Develper Nanodegree in Udacity](https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001).

## Getting started

The `src` stores development code and the `dist` stores production code.

### Run locally

+ `git clone https://github.com/gaoshu883/a-portfolio-site.git`

  ```bash
  $> cd /path/to/your-project-folder/dist
  ```
+ Open `index.html`

### Building tools

Use `gulp` to minify assets and build the project, check out `gulpfile.js` and `package.json`for more details about task runner configure and dependencies.

Install development node-modules:

  ```bash
  $> cd /path/to/your-project-folder
  $> npm install
  ```

## Relative technologies

### Responsive web design

+ Media queries and grid-base layout
  - Breakpoint
  - [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
+ Viewport and Device Pixel Ratio
  - CSS resolution
  - Physical resolution
+ Responsive images
  - Images format
  - `<picture>` element
  - New attributes for the <img>, including `srcset` and `sizes`
  - Images compress and optimization

### Website performance optimization

1. Use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to measure the website performance

1. Optimization:

  + Minify and compress HTML, CSS, JavaScript and images

  + Minimize use of render blocking resources([CSS](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery))
    - Inline CSS
    - [Defer loading of CSS](https://www.giftofspeed.com/defer-loading-css/)
    - Use media queries

  + Minimize use of parse blocking resources(JS)
    - Contact certain scripts
    - Use `async`

## Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/main.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/javascript/">Bootstrap's JavaScript</a>

