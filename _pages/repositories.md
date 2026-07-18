---
layout: page
permalink: /repositories/
title: repositories
description: My GitHub profile and research code repositories.
nav: true
nav_order: 8
---

{% if site.data.repositories.github_users %}

## GitHub

{% for user in site.data.repositories.github_users %}
  <a href="https://github.com/{{ user }}" target="_blank" rel="external nofollow noopener">github.com/{{ user }}</a>
{% endfor %}

---

{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
