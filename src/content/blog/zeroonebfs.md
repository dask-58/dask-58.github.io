---
title: 0-1 BFS
description: Good problems
date: 2024-11-28
tag: bfs
duration: 5 min
---

<ul>
    <li><h4>Problem :</h4> Given an undirected graph with binrary edge weights, find the shortest distance path between a source and destination node.

<h4>Solution :</h4>
Yes, Dijkstra, but is there a better soltuion?
=> 0 - 1 BFS
even in the worst case, dijkstra can go upto O(E + VlogV) using fibonacci heaps,
0 - 1 BFS using a deque can do it in linear time 🤯 O(E + V).

<h4>Tip :</h4>not only for binary weights, but can use for any weights of form {0, x} -> (x >= 0)

Read More
[1](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091456/c-0-1-bfs-with-resource-for-reading)
[2](https://cp-algorithms.com/graph/01_bfs.html)
[3](https://codeforces.com/blog/entry/22276)
[4](https://codeforces.com/blog/entry/86592)
[5](https://www.youtube.com/watch?v=6IwdAvMKq1A)
    </li>

</ul>

more coming soon : ...
