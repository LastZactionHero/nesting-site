---
layout: page
title: Blog
permalink: "/blog/"
---

# The Nest

<div class='container'>
  <div class='col-md-10 col-md-offset-1'>
    <ul class='posts'>
      {% for post in site.posts %}
        <li class='post'>
          <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <div class='date'>{{ post.date | date: '%B %d, %Y' }}</div>
          <p>{{ post.summary }}</p>
        </li>
      {% endfor %}
    </ul>
  </div>

</div>

</div>
  </div>
</div>
