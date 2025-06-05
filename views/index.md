---
title: blog
layout: base
---
{% set navPages = collections.post | reverse %}

{% for item in navPages %}

<article class="pb-2">

<div class="font-semibold font-syne uppercase text-lg"><a href="{{ item.url }}">{{ item.data.title }}</a></div>

<p class="text-gray-600 dark:text-gray-400 pb-2 text-sm">{{ item.data.date | postDate }}</p>

<p class="text">{{ item.page.excerpt }}</p>

</article>

{% endfor %}

 