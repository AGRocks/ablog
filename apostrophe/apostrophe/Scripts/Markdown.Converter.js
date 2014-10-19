



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 //var codesite_token = "ABZ6GAdtNuOZCqsBWbmtl4ehvIa0RnTmCg:1413754776821";
 
 
 //var CS_env = {"domainName": null, "projectHomeUrl": "/p/pagedown", "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "loggedInUserEmail": "GabuzaAV@gmail.com", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/10868592318973270098", "token": "ABZ6GAdtNuOZCqsBWbmtl4ehvIa0RnTmCg:1413754776821", "projectName": "pagedown", "profileUrl": "/u/114196812138739518903/"};
 //var _gaq = _gaq || [];
 //_gaq.push(
 //['siteTracker._setAccount', 'UA-18071-1'],
 //['siteTracker._trackPageview']);
 
 //(function() {
 //var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 //ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 //(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 //})();
 
 </script>
 
 
 <title>Markdown.Converter.js - 
 pagedown -
 
 
 A JavaScript Markdown converter and editor - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
     tr.inline_comment {
         background: #fff;
         vertical-align: top;
     }
     div.draft, div.published {
         padding: .3em;
         border: 1px solid #999; 
         margin-bottom: .1em;
         font-family: arial, sans-serif;
         max-width: 60em;
     }
     div.draft {
         background: #ffa;
     } 
     div.published {
         background: #e5ecf9;
     }
     div.published .body, div.draft .body {
         padding: .5em .1em .1em .1em;
         max-width: 60em;
         white-space: pre-wrap;
         white-space: -moz-pre-wrap;
         white-space: -pre-wrap;
         white-space: -o-pre-wrap;
         word-wrap: break-word;
         font-size: 1em;
     }
     div.draft .actions {
         margin-left: 1em;
         font-size: 90%;
     }
     div.draft form {
         padding: .5em .5em .5em 0;
     }
     div.draft textarea, div.published textarea {
         width: 95%;
         height: 10em;
         font-family: arial, sans-serif;
         margin-bottom: .5em;
     }

 
     .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
         background-color: white;
         height: 2px;
     }
     .cursor, .cursor td {
         background-color: darkblue;
         height: 2px;
         display: '';
     }
 
 
     .list {
         border: 1px solid white;
         border-bottom: 0;
     }

 
     </style>
    </head>
    <body class="t4">
    <script type="text/javascript">
     window.___gcfg = {lang: 'en'};
     (function() 
     {var po = document.createElement("script");
         po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
         var s = document.getElementsByTagName("script")[0];
         s.parentNode.insertBefore(po, s);
     })();
     </script>
     <div class="headbg">

      <div id="gaia">
 

      <span>
 
 
 
      <a href="#" id="multilogin-dropdown" onclick="return false;"
      ><u><b>GabuzaAV@gmail.com</b></u> <small>&#9660;</small></a>
 
 
      | <a href="/u/114196812138739518903/" id="projects-dropdown" onclick="return false;"
      ><u>My favorites</u> <small>&#9660;</small></a>
      | <a href="/u/114196812138739518903/" onclick="_CS_click('/gb/ph/profile');"
     title="Profile, Updates, and Settings"
     ><u>Profile</u></a>
     | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Fpagedown%2Fsource%2Fbrowse%2FMarkdown.Converter.js" 
     onclick="_CS_click('/gb/ph/signout');"
     ><u>Sign out</u></a>
 
     </span>

     </div>

     <div class="gbh" style="left: 0pt;"></div>
     <div class="gbh" style="right: 0pt;"></div>
 
 
     <div style="height: 1px"></div>
    <!--[if lte IE 7]>
    <div style="text-align:center;">
    Your version of Internet Explorer is not supported. Try a browser that
     contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
     <a href="http://www.google.com/chrome">Google Chrome</a>, or
     <a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
     </div>
     <![endif]-->



      <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
     itemscope itemtype="http://schema.org/CreativeWork">
     <tr style="height: 58px;">
 
 
 
     <td id="plogo">
     <link itemprop="url" href="/p/pagedown">
     <a href="/p/pagedown/">
 
     <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
     </a>
     </td>
 
     <td style="padding-left: 0.5em">
 
     <div id="pname">
     <a href="/p/pagedown/"><span itemprop="name">pagedown</span></a>
     </div>
 
     <div id="psum">
     <a id="project_summary_link"
     href="/p/pagedown/"><span itemprop="description">A JavaScript Markdown converter and editor</span></a>
 
     </div>
 
 
     </td>
     <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
     <form action="/hosting/search">
     <input size="30" name="q" value="" type="text">
 
     <input type="submit" name="projectsearch" value="Search projects" >
     </form>
 
     </tr>
     </table>

    </div>

 
    <div id="mt" class="gtb"> 
     <a href="/p/pagedown/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
     <a href="/p/pagedown/w/list" class="tab ">Wiki</a>
 
 
 
 
 
     <a href="/p/pagedown/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/pagedown/source/browse/"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 <form action="/p/pagedown/source/browse" style="display: inline">
 
         Repository:
 <select name="repo" id="repo" style="font-size: 92%" onchange="submit()">
 <option value="default">default</option><option value="wiki">wiki</option>
 </select>
 </form>
 
 


 <span class="inst1"><a href="/p/pagedown/source/checkout">Checkout</a></span> &nbsp;
     <span class="inst2"><a href="/p/pagedown/source/browse/">Browse</a></span> &nbsp;
     <span class="inst3"><a href="/p/pagedown/source/list">Changes</a></span> &nbsp;
     <span class="inst4"><a href="/p/pagedown/source/clones">Clones</a></span> &nbsp; 
 
 
 
 
 
 
     </form>
     <script type="text/javascript">
 
     function codesearchQuery(form) {
         var query = document.getElementById('q').value;
         if (query) { form.action += '%20' + query; }
     }
     </script>
     </div>
    </div>

     </td>
 
 
 
     <td align="right" valign="top" class="bevel-right"></td>
     </tr>
    </table>


    <script type="text/javascript">
     var cancelBubble = false;
     function _go(url) { document.location = url; }
     </script>
     <div id="maincol"
 
     >

 




     <div class="expand">
     <div id="colcontrol">
     <style type="text/css">
      #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
     </style>
     <table id="nav_and_rev" class="list"
     cellpadding="0" cellspacing="0" width="100%">
     <tr>
 
     <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
     <strong class="src_nav">Source path:&nbsp;</strong>
     <span id="crumb_root">
 
     <a href="/p/pagedown/source/browse/">hg</a>/&nbsp;</span>
     <span id="crumb_links" class="ifClosed">Markdown.Converter.js</span>
 
 

     <span class="sourcelabel">Download
     <a href="//pagedown.googlecode.com/archive/2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b.zip" rel="nofollow">zip</a> | <a href="//pagedown.googlecode.com/archive/2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b.tar.gz" rel="nofollow">tar.gz</a>
     </span>


     </td>
 
 
     <td nowrap="nowrap" width="33%" align="center">
     <a href="/p/pagedown/source/browse/Markdown.Converter.js?edit=1"
     ><img src="https://ssl.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/pagedown/source/browse/Markdown.Converter.js?r=50c01599393cc141ba2ccbf985eb8fd522cb1825" title="Previous">&lsaquo;50c01599393c</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>2a8c75ce3fb5</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
    background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_768"

><td id="768"><a href="#768">768</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_769"

><td id="769"><a href="#769">769</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_770"

><td id="770"><a href="#770">770</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_771"

><td id="771"><a href="#771">771</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_772"

><td id="772"><a href="#772">772</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_773"

><td id="773"><a href="#773">773</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_774"

><td id="774"><a href="#774">774</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_775"

><td id="775"><a href="#775">775</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_776"

><td id="776"><a href="#776">776</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_777"

><td id="777"><a href="#777">777</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_778"

><td id="778"><a href="#778">778</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_779"

><td id="779"><a href="#779">779</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_780"

><td id="780"><a href="#780">780</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_781"

><td id="781"><a href="#781">781</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_782"

><td id="782"><a href="#782">782</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_783"

><td id="783"><a href="#783">783</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_784"

><td id="784"><a href="#784">784</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_785"

><td id="785"><a href="#785">785</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_786"

><td id="786"><a href="#786">786</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_787"

><td id="787"><a href="#787">787</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_788"

><td id="788"><a href="#788">788</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_789"

><td id="789"><a href="#789">789</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_790"

><td id="790"><a href="#790">790</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_791"

><td id="791"><a href="#791">791</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_792"

><td id="792"><a href="#792">792</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_793"

><td id="793"><a href="#793">793</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_794"

><td id="794"><a href="#794">794</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_795"

><td id="795"><a href="#795">795</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_796"

><td id="796"><a href="#796">796</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_797"

><td id="797"><a href="#797">797</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_798"

><td id="798"><a href="#798">798</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_799"

><td id="799"><a href="#799">799</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_800"

><td id="800"><a href="#800">800</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_801"

><td id="801"><a href="#801">801</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_802"

><td id="802"><a href="#802">802</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_803"

><td id="803"><a href="#803">803</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_804"

><td id="804"><a href="#804">804</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_805"

><td id="805"><a href="#805">805</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_806"

><td id="806"><a href="#806">806</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_807"

><td id="807"><a href="#807">807</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_808"

><td id="808"><a href="#808">808</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_809"

><td id="809"><a href="#809">809</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_810"

><td id="810"><a href="#810">810</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_811"

><td id="811"><a href="#811">811</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_812"

><td id="812"><a href="#812">812</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_813"

><td id="813"><a href="#813">813</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_814"

><td id="814"><a href="#814">814</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_815"

><td id="815"><a href="#815">815</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_816"

><td id="816"><a href="#816">816</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_817"

><td id="817"><a href="#817">817</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_818"

><td id="818"><a href="#818">818</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_819"

><td id="819"><a href="#819">819</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_820"

><td id="820"><a href="#820">820</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_821"

><td id="821"><a href="#821">821</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_822"

><td id="822"><a href="#822">822</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_823"

><td id="823"><a href="#823">823</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_824"

><td id="824"><a href="#824">824</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_825"

><td id="825"><a href="#825">825</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_826"

><td id="826"><a href="#826">826</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_827"

><td id="827"><a href="#827">827</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_828"

><td id="828"><a href="#828">828</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_829"

><td id="829"><a href="#829">829</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_830"

><td id="830"><a href="#830">830</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_831"

><td id="831"><a href="#831">831</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_832"

><td id="832"><a href="#832">832</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_833"

><td id="833"><a href="#833">833</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_834"

><td id="834"><a href="#834">834</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_835"

><td id="835"><a href="#835">835</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_836"

><td id="836"><a href="#836">836</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_837"

><td id="837"><a href="#837">837</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_838"

><td id="838"><a href="#838">838</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_839"

><td id="839"><a href="#839">839</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_840"

><td id="840"><a href="#840">840</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_841"

><td id="841"><a href="#841">841</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_842"

><td id="842"><a href="#842">842</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_843"

><td id="843"><a href="#843">843</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_844"

><td id="844"><a href="#844">844</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_845"

><td id="845"><a href="#845">845</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_846"

><td id="846"><a href="#846">846</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_847"

><td id="847"><a href="#847">847</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_848"

><td id="848"><a href="#848">848</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_849"

><td id="849"><a href="#849">849</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_850"

><td id="850"><a href="#850">850</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_851"

><td id="851"><a href="#851">851</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_852"

><td id="852"><a href="#852">852</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_853"

><td id="853"><a href="#853">853</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_854"

><td id="854"><a href="#854">854</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_855"

><td id="855"><a href="#855">855</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_856"

><td id="856"><a href="#856">856</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_857"

><td id="857"><a href="#857">857</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_858"

><td id="858"><a href="#858">858</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_859"

><td id="859"><a href="#859">859</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_860"

><td id="860"><a href="#860">860</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_861"

><td id="861"><a href="#861">861</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_862"

><td id="862"><a href="#862">862</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_863"

><td id="863"><a href="#863">863</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_864"

><td id="864"><a href="#864">864</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_865"

><td id="865"><a href="#865">865</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_866"

><td id="866"><a href="#866">866</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_867"

><td id="867"><a href="#867">867</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_868"

><td id="868"><a href="#868">868</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_869"

><td id="869"><a href="#869">869</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_870"

><td id="870"><a href="#870">870</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_871"

><td id="871"><a href="#871">871</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_872"

><td id="872"><a href="#872">872</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_873"

><td id="873"><a href="#873">873</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_874"

><td id="874"><a href="#874">874</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_875"

><td id="875"><a href="#875">875</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_876"

><td id="876"><a href="#876">876</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_877"

><td id="877"><a href="#877">877</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_878"

><td id="878"><a href="#878">878</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_879"

><td id="879"><a href="#879">879</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_880"

><td id="880"><a href="#880">880</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_881"

><td id="881"><a href="#881">881</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_882"

><td id="882"><a href="#882">882</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_883"

><td id="883"><a href="#883">883</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_884"

><td id="884"><a href="#884">884</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_885"

><td id="885"><a href="#885">885</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_886"

><td id="886"><a href="#886">886</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_887"

><td id="887"><a href="#887">887</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_888"

><td id="888"><a href="#888">888</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_889"

><td id="889"><a href="#889">889</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_890"

><td id="890"><a href="#890">890</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_891"

><td id="891"><a href="#891">891</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_892"

><td id="892"><a href="#892">892</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_893"

><td id="893"><a href="#893">893</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_894"

><td id="894"><a href="#894">894</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_895"

><td id="895"><a href="#895">895</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_896"

><td id="896"><a href="#896">896</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_897"

><td id="897"><a href="#897">897</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_898"

><td id="898"><a href="#898">898</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_899"

><td id="899"><a href="#899">899</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_900"

><td id="900"><a href="#900">900</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_901"

><td id="901"><a href="#901">901</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_902"

><td id="902"><a href="#902">902</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_903"

><td id="903"><a href="#903">903</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_904"

><td id="904"><a href="#904">904</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_905"

><td id="905"><a href="#905">905</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_906"

><td id="906"><a href="#906">906</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_907"

><td id="907"><a href="#907">907</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_908"

><td id="908"><a href="#908">908</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_909"

><td id="909"><a href="#909">909</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_910"

><td id="910"><a href="#910">910</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_911"

><td id="911"><a href="#911">911</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_912"

><td id="912"><a href="#912">912</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_913"

><td id="913"><a href="#913">913</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_914"

><td id="914"><a href="#914">914</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_915"

><td id="915"><a href="#915">915</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_916"

><td id="916"><a href="#916">916</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_917"

><td id="917"><a href="#917">917</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_918"

><td id="918"><a href="#918">918</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_919"

><td id="919"><a href="#919">919</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_920"

><td id="920"><a href="#920">920</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_921"

><td id="921"><a href="#921">921</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_922"

><td id="922"><a href="#922">922</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_923"

><td id="923"><a href="#923">923</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_924"

><td id="924"><a href="#924">924</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_925"

><td id="925"><a href="#925">925</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_926"

><td id="926"><a href="#926">926</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_927"

><td id="927"><a href="#927">927</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_928"

><td id="928"><a href="#928">928</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_929"

><td id="929"><a href="#929">929</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_930"

><td id="930"><a href="#930">930</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_931"

><td id="931"><a href="#931">931</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_932"

><td id="932"><a href="#932">932</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_933"

><td id="933"><a href="#933">933</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_934"

><td id="934"><a href="#934">934</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_935"

><td id="935"><a href="#935">935</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_936"

><td id="936"><a href="#936">936</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_937"

><td id="937"><a href="#937">937</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_938"

><td id="938"><a href="#938">938</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_939"

><td id="939"><a href="#939">939</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_940"

><td id="940"><a href="#940">940</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_941"

><td id="941"><a href="#941">941</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_942"

><td id="942"><a href="#942">942</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_943"

><td id="943"><a href="#943">943</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_944"

><td id="944"><a href="#944">944</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_945"

><td id="945"><a href="#945">945</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_946"

><td id="946"><a href="#946">946</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_947"

><td id="947"><a href="#947">947</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_948"

><td id="948"><a href="#948">948</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_949"

><td id="949"><a href="#949">949</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_950"

><td id="950"><a href="#950">950</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_951"

><td id="951"><a href="#951">951</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_952"

><td id="952"><a href="#952">952</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_953"

><td id="953"><a href="#953">953</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_954"

><td id="954"><a href="#954">954</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_955"

><td id="955"><a href="#955">955</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_956"

><td id="956"><a href="#956">956</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_957"

><td id="957"><a href="#957">957</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_958"

><td id="958"><a href="#958">958</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_959"

><td id="959"><a href="#959">959</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_960"

><td id="960"><a href="#960">960</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_961"

><td id="961"><a href="#961">961</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_962"

><td id="962"><a href="#962">962</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_963"

><td id="963"><a href="#963">963</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_964"

><td id="964"><a href="#964">964</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_965"

><td id="965"><a href="#965">965</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_966"

><td id="966"><a href="#966">966</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_967"

><td id="967"><a href="#967">967</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_968"

><td id="968"><a href="#968">968</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_969"

><td id="969"><a href="#969">969</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_970"

><td id="970"><a href="#970">970</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_971"

><td id="971"><a href="#971">971</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_972"

><td id="972"><a href="#972">972</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_973"

><td id="973"><a href="#973">973</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_974"

><td id="974"><a href="#974">974</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_975"

><td id="975"><a href="#975">975</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_976"

><td id="976"><a href="#976">976</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_977"

><td id="977"><a href="#977">977</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_978"

><td id="978"><a href="#978">978</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_979"

><td id="979"><a href="#979">979</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_980"

><td id="980"><a href="#980">980</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_981"

><td id="981"><a href="#981">981</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_982"

><td id="982"><a href="#982">982</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_983"

><td id="983"><a href="#983">983</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_984"

><td id="984"><a href="#984">984</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_985"

><td id="985"><a href="#985">985</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_986"

><td id="986"><a href="#986">986</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_987"

><td id="987"><a href="#987">987</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_988"

><td id="988"><a href="#988">988</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_989"

><td id="989"><a href="#989">989</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_990"

><td id="990"><a href="#990">990</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_991"

><td id="991"><a href="#991">991</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_992"

><td id="992"><a href="#992">992</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_993"

><td id="993"><a href="#993">993</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_994"

><td id="994"><a href="#994">994</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_995"

><td id="995"><a href="#995">995</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_996"

><td id="996"><a href="#996">996</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_997"

><td id="997"><a href="#997">997</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_998"

><td id="998"><a href="#998">998</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_999"

><td id="999"><a href="#999">999</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1000"

><td id="1000"><a href="#1000">1000</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1001"

><td id="1001"><a href="#1001">1001</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1002"

><td id="1002"><a href="#1002">1002</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1003"

><td id="1003"><a href="#1003">1003</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1004"

><td id="1004"><a href="#1004">1004</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1005"

><td id="1005"><a href="#1005">1005</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1006"

><td id="1006"><a href="#1006">1006</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1007"

><td id="1007"><a href="#1007">1007</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1008"

><td id="1008"><a href="#1008">1008</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1009"

><td id="1009"><a href="#1009">1009</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1010"

><td id="1010"><a href="#1010">1010</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1011"

><td id="1011"><a href="#1011">1011</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1012"

><td id="1012"><a href="#1012">1012</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1013"

><td id="1013"><a href="#1013">1013</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1014"

><td id="1014"><a href="#1014">1014</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1015"

><td id="1015"><a href="#1015">1015</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1016"

><td id="1016"><a href="#1016">1016</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1017"

><td id="1017"><a href="#1017">1017</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1018"

><td id="1018"><a href="#1018">1018</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1019"

><td id="1019"><a href="#1019">1019</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1020"

><td id="1020"><a href="#1020">1020</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1021"

><td id="1021"><a href="#1021">1021</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1022"

><td id="1022"><a href="#1022">1022</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1023"

><td id="1023"><a href="#1023">1023</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1024"

><td id="1024"><a href="#1024">1024</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1025"

><td id="1025"><a href="#1025">1025</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1026"

><td id="1026"><a href="#1026">1026</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1027"

><td id="1027"><a href="#1027">1027</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1028"

><td id="1028"><a href="#1028">1028</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1029"

><td id="1029"><a href="#1029">1029</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1030"

><td id="1030"><a href="#1030">1030</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1031"

><td id="1031"><a href="#1031">1031</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1032"

><td id="1032"><a href="#1032">1032</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1033"

><td id="1033"><a href="#1033">1033</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1034"

><td id="1034"><a href="#1034">1034</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1035"

><td id="1035"><a href="#1035">1035</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1036"

><td id="1036"><a href="#1036">1036</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1037"

><td id="1037"><a href="#1037">1037</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1038"

><td id="1038"><a href="#1038">1038</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1039"

><td id="1039"><a href="#1039">1039</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1040"

><td id="1040"><a href="#1040">1040</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1041"

><td id="1041"><a href="#1041">1041</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1042"

><td id="1042"><a href="#1042">1042</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1043"

><td id="1043"><a href="#1043">1043</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1044"

><td id="1044"><a href="#1044">1044</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1045"

><td id="1045"><a href="#1045">1045</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1046"

><td id="1046"><a href="#1046">1046</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1047"

><td id="1047"><a href="#1047">1047</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1048"

><td id="1048"><a href="#1048">1048</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1049"

><td id="1049"><a href="#1049">1049</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1050"

><td id="1050"><a href="#1050">1050</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1051"

><td id="1051"><a href="#1051">1051</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1052"

><td id="1052"><a href="#1052">1052</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1053"

><td id="1053"><a href="#1053">1053</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1054"

><td id="1054"><a href="#1054">1054</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1055"

><td id="1055"><a href="#1055">1055</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1056"

><td id="1056"><a href="#1056">1056</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1057"

><td id="1057"><a href="#1057">1057</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1058"

><td id="1058"><a href="#1058">1058</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1059"

><td id="1059"><a href="#1059">1059</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1060"

><td id="1060"><a href="#1060">1060</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1061"

><td id="1061"><a href="#1061">1061</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1062"

><td id="1062"><a href="#1062">1062</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1063"

><td id="1063"><a href="#1063">1063</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1064"

><td id="1064"><a href="#1064">1064</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1065"

><td id="1065"><a href="#1065">1065</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1066"

><td id="1066"><a href="#1066">1066</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1067"

><td id="1067"><a href="#1067">1067</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1068"

><td id="1068"><a href="#1068">1068</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1069"

><td id="1069"><a href="#1069">1069</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1070"

><td id="1070"><a href="#1070">1070</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1071"

><td id="1071"><a href="#1071">1071</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1072"

><td id="1072"><a href="#1072">1072</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1073"

><td id="1073"><a href="#1073">1073</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1074"

><td id="1074"><a href="#1074">1074</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1075"

><td id="1075"><a href="#1075">1075</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1076"

><td id="1076"><a href="#1076">1076</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1077"

><td id="1077"><a href="#1077">1077</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1078"

><td id="1078"><a href="#1078">1078</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1079"

><td id="1079"><a href="#1079">1079</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1080"

><td id="1080"><a href="#1080">1080</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1081"

><td id="1081"><a href="#1081">1081</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1082"

><td id="1082"><a href="#1082">1082</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1083"

><td id="1083"><a href="#1083">1083</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1084"

><td id="1084"><a href="#1084">1084</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1085"

><td id="1085"><a href="#1085">1085</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1086"

><td id="1086"><a href="#1086">1086</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1087"

><td id="1087"><a href="#1087">1087</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1088"

><td id="1088"><a href="#1088">1088</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1089"

><td id="1089"><a href="#1089">1089</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1090"

><td id="1090"><a href="#1090">1090</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1091"

><td id="1091"><a href="#1091">1091</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1092"

><td id="1092"><a href="#1092">1092</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1093"

><td id="1093"><a href="#1093">1093</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1094"

><td id="1094"><a href="#1094">1094</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1095"

><td id="1095"><a href="#1095">1095</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1096"

><td id="1096"><a href="#1096">1096</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1097"

><td id="1097"><a href="#1097">1097</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1098"

><td id="1098"><a href="#1098">1098</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1099"

><td id="1099"><a href="#1099">1099</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1100"

><td id="1100"><a href="#1100">1100</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1101"

><td id="1101"><a href="#1101">1101</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1102"

><td id="1102"><a href="#1102">1102</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1103"

><td id="1103"><a href="#1103">1103</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1104"

><td id="1104"><a href="#1104">1104</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1105"

><td id="1105"><a href="#1105">1105</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1106"

><td id="1106"><a href="#1106">1106</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1107"

><td id="1107"><a href="#1107">1107</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1108"

><td id="1108"><a href="#1108">1108</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1109"

><td id="1109"><a href="#1109">1109</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1110"

><td id="1110"><a href="#1110">1110</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1111"

><td id="1111"><a href="#1111">1111</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1112"

><td id="1112"><a href="#1112">1112</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1113"

><td id="1113"><a href="#1113">1113</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1114"

><td id="1114"><a href="#1114">1114</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1115"

><td id="1115"><a href="#1115">1115</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1116"

><td id="1116"><a href="#1116">1116</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1117"

><td id="1117"><a href="#1117">1117</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1118"

><td id="1118"><a href="#1118">1118</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1119"

><td id="1119"><a href="#1119">1119</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1120"

><td id="1120"><a href="#1120">1120</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1121"

><td id="1121"><a href="#1121">1121</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1122"

><td id="1122"><a href="#1122">1122</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1123"

><td id="1123"><a href="#1123">1123</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1124"

><td id="1124"><a href="#1124">1124</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1125"

><td id="1125"><a href="#1125">1125</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1126"

><td id="1126"><a href="#1126">1126</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1127"

><td id="1127"><a href="#1127">1127</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1128"

><td id="1128"><a href="#1128">1128</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1129"

><td id="1129"><a href="#1129">1129</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1130"

><td id="1130"><a href="#1130">1130</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1131"

><td id="1131"><a href="#1131">1131</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1132"

><td id="1132"><a href="#1132">1132</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1133"

><td id="1133"><a href="#1133">1133</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1134"

><td id="1134"><a href="#1134">1134</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1135"

><td id="1135"><a href="#1135">1135</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1136"

><td id="1136"><a href="#1136">1136</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1137"

><td id="1137"><a href="#1137">1137</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1138"

><td id="1138"><a href="#1138">1138</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1139"

><td id="1139"><a href="#1139">1139</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1140"

><td id="1140"><a href="#1140">1140</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1141"

><td id="1141"><a href="#1141">1141</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1142"

><td id="1142"><a href="#1142">1142</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1143"

><td id="1143"><a href="#1143">1143</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1144"

><td id="1144"><a href="#1144">1144</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1145"

><td id="1145"><a href="#1145">1145</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1146"

><td id="1146"><a href="#1146">1146</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1147"

><td id="1147"><a href="#1147">1147</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1148"

><td id="1148"><a href="#1148">1148</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1149"

><td id="1149"><a href="#1149">1149</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1150"

><td id="1150"><a href="#1150">1150</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1151"

><td id="1151"><a href="#1151">1151</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1152"

><td id="1152"><a href="#1152">1152</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1153"

><td id="1153"><a href="#1153">1153</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1154"

><td id="1154"><a href="#1154">1154</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1155"

><td id="1155"><a href="#1155">1155</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1156"

><td id="1156"><a href="#1156">1156</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1157"

><td id="1157"><a href="#1157">1157</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1158"

><td id="1158"><a href="#1158">1158</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1159"

><td id="1159"><a href="#1159">1159</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1160"

><td id="1160"><a href="#1160">1160</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1161"

><td id="1161"><a href="#1161">1161</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1162"

><td id="1162"><a href="#1162">1162</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1163"

><td id="1163"><a href="#1163">1163</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1164"

><td id="1164"><a href="#1164">1164</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1165"

><td id="1165"><a href="#1165">1165</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1166"

><td id="1166"><a href="#1166">1166</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1167"

><td id="1167"><a href="#1167">1167</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1168"

><td id="1168"><a href="#1168">1168</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1169"

><td id="1169"><a href="#1169">1169</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1170"

><td id="1170"><a href="#1170">1170</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1171"

><td id="1171"><a href="#1171">1171</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1172"

><td id="1172"><a href="#1172">1172</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1173"

><td id="1173"><a href="#1173">1173</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1174"

><td id="1174"><a href="#1174">1174</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1175"

><td id="1175"><a href="#1175">1175</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1176"

><td id="1176"><a href="#1176">1176</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1177"

><td id="1177"><a href="#1177">1177</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1178"

><td id="1178"><a href="#1178">1178</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1179"

><td id="1179"><a href="#1179">1179</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1180"

><td id="1180"><a href="#1180">1180</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1181"

><td id="1181"><a href="#1181">1181</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1182"

><td id="1182"><a href="#1182">1182</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1183"

><td id="1183"><a href="#1183">1183</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1184"

><td id="1184"><a href="#1184">1184</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1185"

><td id="1185"><a href="#1185">1185</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1186"

><td id="1186"><a href="#1186">1186</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1187"

><td id="1187"><a href="#1187">1187</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1188"

><td id="1188"><a href="#1188">1188</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1189"

><td id="1189"><a href="#1189">1189</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1190"

><td id="1190"><a href="#1190">1190</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1191"

><td id="1191"><a href="#1191">1191</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1192"

><td id="1192"><a href="#1192">1192</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1193"

><td id="1193"><a href="#1193">1193</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1194"

><td id="1194"><a href="#1194">1194</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1195"

><td id="1195"><a href="#1195">1195</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1196"

><td id="1196"><a href="#1196">1196</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1197"

><td id="1197"><a href="#1197">1197</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1198"

><td id="1198"><a href="#1198">1198</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1199"

><td id="1199"><a href="#1199">1199</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1200"

><td id="1200"><a href="#1200">1200</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1201"

><td id="1201"><a href="#1201">1201</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1202"

><td id="1202"><a href="#1202">1202</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1203"

><td id="1203"><a href="#1203">1203</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1204"

><td id="1204"><a href="#1204">1204</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1205"

><td id="1205"><a href="#1205">1205</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1206"

><td id="1206"><a href="#1206">1206</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1207"

><td id="1207"><a href="#1207">1207</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1208"

><td id="1208"><a href="#1208">1208</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1209"

><td id="1209"><a href="#1209">1209</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1210"

><td id="1210"><a href="#1210">1210</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1211"

><td id="1211"><a href="#1211">1211</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1212"

><td id="1212"><a href="#1212">1212</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1213"

><td id="1213"><a href="#1213">1213</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1214"

><td id="1214"><a href="#1214">1214</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1215"

><td id="1215"><a href="#1215">1215</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1216"

><td id="1216"><a href="#1216">1216</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1217"

><td id="1217"><a href="#1217">1217</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1218"

><td id="1218"><a href="#1218">1218</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1219"

><td id="1219"><a href="#1219">1219</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1220"

><td id="1220"><a href="#1220">1220</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1221"

><td id="1221"><a href="#1221">1221</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1222"

><td id="1222"><a href="#1222">1222</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1223"

><td id="1223"><a href="#1223">1223</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1224"

><td id="1224"><a href="#1224">1224</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1225"

><td id="1225"><a href="#1225">1225</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1226"

><td id="1226"><a href="#1226">1226</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1227"

><td id="1227"><a href="#1227">1227</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1228"

><td id="1228"><a href="#1228">1228</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1229"

><td id="1229"><a href="#1229">1229</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1230"

><td id="1230"><a href="#1230">1230</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1231"

><td id="1231"><a href="#1231">1231</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1232"

><td id="1232"><a href="#1232">1232</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1233"

><td id="1233"><a href="#1233">1233</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1234"

><td id="1234"><a href="#1234">1234</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1235"

><td id="1235"><a href="#1235">1235</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1236"

><td id="1236"><a href="#1236">1236</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1237"

><td id="1237"><a href="#1237">1237</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1238"

><td id="1238"><a href="#1238">1238</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1239"

><td id="1239"><a href="#1239">1239</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1240"

><td id="1240"><a href="#1240">1240</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1241"

><td id="1241"><a href="#1241">1241</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1242"

><td id="1242"><a href="#1242">1242</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1243"

><td id="1243"><a href="#1243">1243</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1244"

><td id="1244"><a href="#1244">1244</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1245"

><td id="1245"><a href="#1245">1245</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1246"

><td id="1246"><a href="#1246">1246</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1247"

><td id="1247"><a href="#1247">1247</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1248"

><td id="1248"><a href="#1248">1248</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1249"

><td id="1249"><a href="#1249">1249</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1250"

><td id="1250"><a href="#1250">1250</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1251"

><td id="1251"><a href="#1251">1251</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1252"

><td id="1252"><a href="#1252">1252</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1253"

><td id="1253"><a href="#1253">1253</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1254"

><td id="1254"><a href="#1254">1254</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1255"

><td id="1255"><a href="#1255">1255</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1256"

><td id="1256"><a href="#1256">1256</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1257"

><td id="1257"><a href="#1257">1257</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1258"

><td id="1258"><a href="#1258">1258</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1259"

><td id="1259"><a href="#1259">1259</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1260"

><td id="1260"><a href="#1260">1260</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1261"

><td id="1261"><a href="#1261">1261</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1262"

><td id="1262"><a href="#1262">1262</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1263"

><td id="1263"><a href="#1263">1263</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1264"

><td id="1264"><a href="#1264">1264</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1265"

><td id="1265"><a href="#1265">1265</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1266"

><td id="1266"><a href="#1266">1266</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1267"

><td id="1267"><a href="#1267">1267</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1268"

><td id="1268"><a href="#1268">1268</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1269"

><td id="1269"><a href="#1269">1269</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1270"

><td id="1270"><a href="#1270">1270</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1271"

><td id="1271"><a href="#1271">1271</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1272"

><td id="1272"><a href="#1272">1272</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1273"

><td id="1273"><a href="#1273">1273</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1274"

><td id="1274"><a href="#1274">1274</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1275"

><td id="1275"><a href="#1275">1275</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1276"

><td id="1276"><a href="#1276">1276</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1277"

><td id="1277"><a href="#1277">1277</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1278"

><td id="1278"><a href="#1278">1278</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1279"

><td id="1279"><a href="#1279">1279</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1280"

><td id="1280"><a href="#1280">1280</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1281"

><td id="1281"><a href="#1281">1281</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1282"

><td id="1282"><a href="#1282">1282</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1283"

><td id="1283"><a href="#1283">1283</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1284"

><td id="1284"><a href="#1284">1284</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1285"

><td id="1285"><a href="#1285">1285</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1286"

><td id="1286"><a href="#1286">1286</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1287"

><td id="1287"><a href="#1287">1287</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1288"

><td id="1288"><a href="#1288">1288</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1289"

><td id="1289"><a href="#1289">1289</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1290"

><td id="1290"><a href="#1290">1290</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1291"

><td id="1291"><a href="#1291">1291</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1292"

><td id="1292"><a href="#1292">1292</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1293"

><td id="1293"><a href="#1293">1293</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1294"

><td id="1294"><a href="#1294">1294</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1295"

><td id="1295"><a href="#1295">1295</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1296"

><td id="1296"><a href="#1296">1296</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1297"

><td id="1297"><a href="#1297">1297</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1298"

><td id="1298"><a href="#1298">1298</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1299"

><td id="1299"><a href="#1299">1299</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1300"

><td id="1300"><a href="#1300">1300</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1301"

><td id="1301"><a href="#1301">1301</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1302"

><td id="1302"><a href="#1302">1302</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1303"

><td id="1303"><a href="#1303">1303</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1304"

><td id="1304"><a href="#1304">1304</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1305"

><td id="1305"><a href="#1305">1305</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1306"

><td id="1306"><a href="#1306">1306</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1307"

><td id="1307"><a href="#1307">1307</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1308"

><td id="1308"><a href="#1308">1308</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1309"

><td id="1309"><a href="#1309">1309</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1310"

><td id="1310"><a href="#1310">1310</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1311"

><td id="1311"><a href="#1311">1311</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1312"

><td id="1312"><a href="#1312">1312</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1313"

><td id="1313"><a href="#1313">1313</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1314"

><td id="1314"><a href="#1314">1314</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1315"

><td id="1315"><a href="#1315">1315</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1316"

><td id="1316"><a href="#1316">1316</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1317"

><td id="1317"><a href="#1317">1317</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1318"

><td id="1318"><a href="#1318">1318</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1319"

><td id="1319"><a href="#1319">1319</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1320"

><td id="1320"><a href="#1320">1320</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1321"

><td id="1321"><a href="#1321">1321</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1322"

><td id="1322"><a href="#1322">1322</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1323"

><td id="1323"><a href="#1323">1323</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1324"

><td id="1324"><a href="#1324">1324</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1325"

><td id="1325"><a href="#1325">1325</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1326"

><td id="1326"><a href="#1326">1326</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1327"

><td id="1327"><a href="#1327">1327</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1328"

><td id="1328"><a href="#1328">1328</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1329"

><td id="1329"><a href="#1329">1329</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1330"

><td id="1330"><a href="#1330">1330</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1331"

><td id="1331"><a href="#1331">1331</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1332"

><td id="1332"><a href="#1332">1332</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1333"

><td id="1333"><a href="#1333">1333</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1334"

><td id="1334"><a href="#1334">1334</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1335"

><td id="1335"><a href="#1335">1335</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1336"

><td id="1336"><a href="#1336">1336</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1337"

><td id="1337"><a href="#1337">1337</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1338"

><td id="1338"><a href="#1338">1338</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1339"

><td id="1339"><a href="#1339">1339</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1340"

><td id="1340"><a href="#1340">1340</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1341"

><td id="1341"><a href="#1341">1341</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1342"

><td id="1342"><a href="#1342">1342</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1343"

><td id="1343"><a href="#1343">1343</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1344"

><td id="1344"><a href="#1344">1344</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1345"

><td id="1345"><a href="#1345">1345</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1346"

><td id="1346"><a href="#1346">1346</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1347"

><td id="1347"><a href="#1347">1347</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1348"

><td id="1348"><a href="#1348">1348</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1349"

><td id="1349"><a href="#1349">1349</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1350"

><td id="1350"><a href="#1350">1350</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1351"

><td id="1351"><a href="#1351">1351</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1352"

><td id="1352"><a href="#1352">1352</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1353"

><td id="1353"><a href="#1353">1353</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1354"

><td id="1354"><a href="#1354">1354</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1355"

><td id="1355"><a href="#1355">1355</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1356"

><td id="1356"><a href="#1356">1356</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1357"

><td id="1357"><a href="#1357">1357</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1358"

><td id="1358"><a href="#1358">1358</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1359"

><td id="1359"><a href="#1359">1359</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1360"

><td id="1360"><a href="#1360">1360</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1361"

><td id="1361"><a href="#1361">1361</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1362"

><td id="1362"><a href="#1362">1362</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1363"

><td id="1363"><a href="#1363">1363</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1364"

><td id="1364"><a href="#1364">1364</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1365"

><td id="1365"><a href="#1365">1365</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1366"

><td id="1366"><a href="#1366">1366</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1367"

><td id="1367"><a href="#1367">1367</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1368"

><td id="1368"><a href="#1368">1368</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1369"

><td id="1369"><a href="#1369">1369</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1370"

><td id="1370"><a href="#1370">1370</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1371"

><td id="1371"><a href="#1371">1371</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1372"

><td id="1372"><a href="#1372">1372</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1373"

><td id="1373"><a href="#1373">1373</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1374"

><td id="1374"><a href="#1374">1374</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1375"

><td id="1375"><a href="#1375">1375</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1376"

><td id="1376"><a href="#1376">1376</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1377"

><td id="1377"><a href="#1377">1377</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1378"

><td id="1378"><a href="#1378">1378</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1379"

><td id="1379"><a href="#1379">1379</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1380"

><td id="1380"><a href="#1380">1380</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1381"

><td id="1381"><a href="#1381">1381</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1382"

><td id="1382"><a href="#1382">1382</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1383"

><td id="1383"><a href="#1383">1383</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1384"

><td id="1384"><a href="#1384">1384</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1385"

><td id="1385"><a href="#1385">1385</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1386"

><td id="1386"><a href="#1386">1386</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1387"

><td id="1387"><a href="#1387">1387</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1388"

><td id="1388"><a href="#1388">1388</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1389"

><td id="1389"><a href="#1389">1389</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1390"

><td id="1390"><a href="#1390">1390</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1391"

><td id="1391"><a href="#1391">1391</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1392"

><td id="1392"><a href="#1392">1392</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1393"

><td id="1393"><a href="#1393">1393</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1394"

><td id="1394"><a href="#1394">1394</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1395"

><td id="1395"><a href="#1395">1395</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1396"

><td id="1396"><a href="#1396">1396</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1397"

><td id="1397"><a href="#1397">1397</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1398"

><td id="1398"><a href="#1398">1398</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1399"

><td id="1399"><a href="#1399">1399</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1400"

><td id="1400"><a href="#1400">1400</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1401"

><td id="1401"><a href="#1401">1401</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1402"

><td id="1402"><a href="#1402">1402</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1403"

><td id="1403"><a href="#1403">1403</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1404"

><td id="1404"><a href="#1404">1404</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1405"

><td id="1405"><a href="#1405">1405</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1406"

><td id="1406"><a href="#1406">1406</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1407"

><td id="1407"><a href="#1407">1407</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1408"

><td id="1408"><a href="#1408">1408</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1409"

><td id="1409"><a href="#1409">1409</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1410"

><td id="1410"><a href="#1410">1410</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1411"

><td id="1411"><a href="#1411">1411</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1412"

><td id="1412"><a href="#1412">1412</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1413"

><td id="1413"><a href="#1413">1413</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1414"

><td id="1414"><a href="#1414">1414</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1415"

><td id="1415"><a href="#1415">1415</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1416"

><td id="1416"><a href="#1416">1416</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1417"

><td id="1417"><a href="#1417">1417</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1418"

><td id="1418"><a href="#1418">1418</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1419"

><td id="1419"><a href="#1419">1419</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1420"

><td id="1420"><a href="#1420">1420</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1421"

><td id="1421"><a href="#1421">1421</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1422"

><td id="1422"><a href="#1422">1422</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1423"

><td id="1423"><a href="#1423">1423</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1424"

><td id="1424"><a href="#1424">1424</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1425"

><td id="1425"><a href="#1425">1425</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1426"

><td id="1426"><a href="#1426">1426</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1427"

><td id="1427"><a href="#1427">1427</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1428"

><td id="1428"><a href="#1428">1428</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1429"

><td id="1429"><a href="#1429">1429</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1430"

><td id="1430"><a href="#1430">1430</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1431"

><td id="1431"><a href="#1431">1431</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1432"

><td id="1432"><a href="#1432">1432</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1433"

><td id="1433"><a href="#1433">1433</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1434"

><td id="1434"><a href="#1434">1434</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1435"

><td id="1435"><a href="#1435">1435</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1436"

><td id="1436"><a href="#1436">1436</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1437"

><td id="1437"><a href="#1437">1437</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1438"

><td id="1438"><a href="#1438">1438</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1439"

><td id="1439"><a href="#1439">1439</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1440"

><td id="1440"><a href="#1440">1440</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1441"

><td id="1441"><a href="#1441">1441</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1442"

><td id="1442"><a href="#1442">1442</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1443"

><td id="1443"><a href="#1443">1443</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1444"

><td id="1444"><a href="#1444">1444</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1445"

><td id="1445"><a href="#1445">1445</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1446"

><td id="1446"><a href="#1446">1446</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1447"

><td id="1447"><a href="#1447">1447</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1448"

><td id="1448"><a href="#1448">1448</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1449"

><td id="1449"><a href="#1449">1449</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1450"

><td id="1450"><a href="#1450">1450</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1451"

><td id="1451"><a href="#1451">1451</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1452"

><td id="1452"><a href="#1452">1452</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1453"

><td id="1453"><a href="#1453">1453</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1454"

><td id="1454"><a href="#1454">1454</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1455"

><td id="1455"><a href="#1455">1455</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1456"

><td id="1456"><a href="#1456">1456</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1457"

><td id="1457"><a href="#1457">1457</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1458"

><td id="1458"><a href="#1458">1458</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1459"

><td id="1459"><a href="#1459">1459</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1460"

><td id="1460"><a href="#1460">1460</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1461"

><td id="1461"><a href="#1461">1461</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1462"

><td id="1462"><a href="#1462">1462</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1463"

><td id="1463"><a href="#1463">1463</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1464"

><td id="1464"><a href="#1464">1464</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1465"

><td id="1465"><a href="#1465">1465</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1466"

><td id="1466"><a href="#1466">1466</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1467"

><td id="1467"><a href="#1467">1467</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1468"

><td id="1468"><a href="#1468">1468</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1469"

><td id="1469"><a href="#1469">1469</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1470"

><td id="1470"><a href="#1470">1470</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1471"

><td id="1471"><a href="#1471">1471</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1472"

><td id="1472"><a href="#1472">1472</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1473"

><td id="1473"><a href="#1473">1473</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1474"

><td id="1474"><a href="#1474">1474</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1475"

><td id="1475"><a href="#1475">1475</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1476"

><td id="1476"><a href="#1476">1476</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1477"

><td id="1477"><a href="#1477">1477</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1478"

><td id="1478"><a href="#1478">1478</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1479"

><td id="1479"><a href="#1479">1479</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1480"

><td id="1480"><a href="#1480">1480</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1481"

><td id="1481"><a href="#1481">1481</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1482"

><td id="1482"><a href="#1482">1482</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1483"

><td id="1483"><a href="#1483">1483</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1484"

><td id="1484"><a href="#1484">1484</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1485"

><td id="1485"><a href="#1485">1485</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1486"

><td id="1486"><a href="#1486">1486</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1487"

><td id="1487"><a href="#1487">1487</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1488"

><td id="1488"><a href="#1488">1488</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1489"

><td id="1489"><a href="#1489">1489</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1490"

><td id="1490"><a href="#1490">1490</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1491"

><td id="1491"><a href="#1491">1491</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1492"

><td id="1492"><a href="#1492">1492</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1493"

><td id="1493"><a href="#1493">1493</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1494"

><td id="1494"><a href="#1494">1494</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1495"

><td id="1495"><a href="#1495">1495</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1496"

><td id="1496"><a href="#1496">1496</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1497"

><td id="1497"><a href="#1497">1497</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1498"

><td id="1498"><a href="#1498">1498</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1499"

><td id="1499"><a href="#1499">1499</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1500"

><td id="1500"><a href="#1500">1500</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1501"

><td id="1501"><a href="#1501">1501</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1502"

><td id="1502"><a href="#1502">1502</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1503"

><td id="1503"><a href="#1503">1503</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1504"

><td id="1504"><a href="#1504">1504</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1505"

><td id="1505"><a href="#1505">1505</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1506"

><td id="1506"><a href="#1506">1506</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1507"

><td id="1507"><a href="#1507">1507</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1508"

><td id="1508"><a href="#1508">1508</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1509"

><td id="1509"><a href="#1509">1509</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1510"

><td id="1510"><a href="#1510">1510</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1511"

><td id="1511"><a href="#1511">1511</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1512"

><td id="1512"><a href="#1512">1512</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1513"

><td id="1513"><a href="#1513">1513</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1514"

><td id="1514"><a href="#1514">1514</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1515"

><td id="1515"><a href="#1515">1515</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1516"

><td id="1516"><a href="#1516">1516</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1517"

><td id="1517"><a href="#1517">1517</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1518"

><td id="1518"><a href="#1518">1518</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1519"

><td id="1519"><a href="#1519">1519</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1520"

><td id="1520"><a href="#1520">1520</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1521"

><td id="1521"><a href="#1521">1521</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1522"

><td id="1522"><a href="#1522">1522</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1523"

><td id="1523"><a href="#1523">1523</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1524"

><td id="1524"><a href="#1524">1524</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1525"

><td id="1525"><a href="#1525">1525</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1526"

><td id="1526"><a href="#1526">1526</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1527"

><td id="1527"><a href="#1527">1527</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1528"

><td id="1528"><a href="#1528">1528</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1529"

><td id="1529"><a href="#1529">1529</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1530"

><td id="1530"><a href="#1530">1530</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1531"

><td id="1531"><a href="#1531">1531</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1532"

><td id="1532"><a href="#1532">1532</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1533"

><td id="1533"><a href="#1533">1533</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1534"

><td id="1534"><a href="#1534">1534</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1535"

><td id="1535"><a href="#1535">1535</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1536"

><td id="1536"><a href="#1536">1536</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1537"

><td id="1537"><a href="#1537">1537</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1538"

><td id="1538"><a href="#1538">1538</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1539"

><td id="1539"><a href="#1539">1539</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1540"

><td id="1540"><a href="#1540">1540</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1541"

><td id="1541"><a href="#1541">1541</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1542"

><td id="1542"><a href="#1542">1542</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1543"

><td id="1543"><a href="#1543">1543</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1544"

><td id="1544"><a href="#1544">1544</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1545"

><td id="1545"><a href="#1545">1545</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1546"

><td id="1546"><a href="#1546">1546</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1547"

><td id="1547"><a href="#1547">1547</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1548"

><td id="1548"><a href="#1548">1548</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1549"

><td id="1549"><a href="#1549">1549</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1550"

><td id="1550"><a href="#1550">1550</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1551"

><td id="1551"><a href="#1551">1551</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1552"

><td id="1552"><a href="#1552">1552</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1553"

><td id="1553"><a href="#1553">1553</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1554"

><td id="1554"><a href="#1554">1554</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1555"

><td id="1555"><a href="#1555">1555</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1556"

><td id="1556"><a href="#1556">1556</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1557"

><td id="1557"><a href="#1557">1557</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1558"

><td id="1558"><a href="#1558">1558</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1559"

><td id="1559"><a href="#1559">1559</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1560"

><td id="1560"><a href="#1560">1560</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1561"

><td id="1561"><a href="#1561">1561</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1562"

><td id="1562"><a href="#1562">1562</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1563"

><td id="1563"><a href="#1563">1563</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1564"

><td id="1564"><a href="#1564">1564</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1565"

><td id="1565"><a href="#1565">1565</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1566"

><td id="1566"><a href="#1566">1566</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1567"

><td id="1567"><a href="#1567">1567</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1568"

><td id="1568"><a href="#1568">1568</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1569"

><td id="1569"><a href="#1569">1569</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1570"

><td id="1570"><a href="#1570">1570</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1571"

><td id="1571"><a href="#1571">1571</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1572"

><td id="1572"><a href="#1572">1572</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1573"

><td id="1573"><a href="#1573">1573</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1574"

><td id="1574"><a href="#1574">1574</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1575"

><td id="1575"><a href="#1575">1575</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1576"

><td id="1576"><a href="#1576">1576</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1577"

><td id="1577"><a href="#1577">1577</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1578"

><td id="1578"><a href="#1578">1578</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1579"

><td id="1579"><a href="#1579">1579</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1580"

><td id="1580"><a href="#1580">1580</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1581"

><td id="1581"><a href="#1581">1581</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1582"

><td id="1582"><a href="#1582">1582</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1583"

><td id="1583"><a href="#1583">1583</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1584"

><td id="1584"><a href="#1584">1584</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1585"

><td id="1585"><a href="#1585">1585</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1586"

><td id="1586"><a href="#1586">1586</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1587"

><td id="1587"><a href="#1587">1587</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1588"

><td id="1588"><a href="#1588">1588</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1589"

><td id="1589"><a href="#1589">1589</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1590"

><td id="1590"><a href="#1590">1590</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1591"

><td id="1591"><a href="#1591">1591</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1592"

><td id="1592"><a href="#1592">1592</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1593"

><td id="1593"><a href="#1593">1593</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1594"

><td id="1594"><a href="#1594">1594</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1595"

><td id="1595"><a href="#1595">1595</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1596"

><td id="1596"><a href="#1596">1596</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1597"

><td id="1597"><a href="#1597">1597</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1598"

><td id="1598"><a href="#1598">1598</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1599"

><td id="1599"><a href="#1599">1599</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1600"

><td id="1600"><a href="#1600">1600</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1601"

><td id="1601"><a href="#1601">1601</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1602"

><td id="1602"><a href="#1602">1602</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1603"

><td id="1603"><a href="#1603">1603</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1604"

><td id="1604"><a href="#1604">1604</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1605"

><td id="1605"><a href="#1605">1605</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1606"

><td id="1606"><a href="#1606">1606</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1607"

><td id="1607"><a href="#1607">1607</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1608"

><td id="1608"><a href="#1608">1608</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1609"

><td id="1609"><a href="#1609">1609</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1610"

><td id="1610"><a href="#1610">1610</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1611"

><td id="1611"><a href="#1611">1611</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1612"

><td id="1612"><a href="#1612">1612</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1613"

><td id="1613"><a href="#1613">1613</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1614"

><td id="1614"><a href="#1614">1614</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1615"

><td id="1615"><a href="#1615">1615</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1616"

><td id="1616"><a href="#1616">1616</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1617"

><td id="1617"><a href="#1617">1617</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1618"

><td id="1618"><a href="#1618">1618</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1619"

><td id="1619"><a href="#1619">1619</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1620"

><td id="1620"><a href="#1620">1620</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1621"

><td id="1621"><a href="#1621">1621</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1622"

><td id="1622"><a href="#1622">1622</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1623"

><td id="1623"><a href="#1623">1623</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1624"

><td id="1624"><a href="#1624">1624</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1625"

><td id="1625"><a href="#1625">1625</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1626"

><td id="1626"><a href="#1626">1626</a></td></tr
><tr id="gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1627"

><td id="1627"><a href="#1627">1627</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1

    ><td class="source">&quot;use strict&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_2

    ><td class="source">var Markdown;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_3

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_4

    ><td class="source">if (typeof exports === &quot;object&quot; &amp;&amp; typeof require === &quot;function&quot;) // we&#39;re in a CommonJS (e.g. Node.js) module<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_5

        ><td class="source">    Markdown = exports;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_6

        ><td class="source">else<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_7

        ><td class="source">    Markdown = {};<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_8

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_9

        ><td class="source">// The following text is included for historical reasons, but should<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_10

        ><td class="source">// be taken with a pinch of salt; it&#39;s not all true anymore.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_11

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_12

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_13

        ><td class="source">// Wherever possible, Showdown is a straight, line-by-line port<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_14

        ><td class="source">// of the Perl version of Markdown.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_15

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_16

        ><td class="source">// This is not a normal parser design; it&#39;s basically just a<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_17

        ><td class="source">// series of string substitutions.  It&#39;s hard to read and<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_18

        ><td class="source">// maintain this way,  but keeping Showdown close to the original<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_19

        ><td class="source">// design makes it easier to port new features.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_20

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_21

        ><td class="source">// More importantly, Showdown behaves like markdown.pl in most<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_22

        ><td class="source">// edge cases.  So web applications can do client-side preview<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_23

        ><td class="source">// in Javascript, and then build identical HTML on the server.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_24

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_25

        ><td class="source">// This port needs the new RegExp functionality of ECMA 262,<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_26

        ><td class="source">// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_27

        ><td class="source">// should do fine.  Even with the new regular expression features,<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_28

        ><td class="source">// We do a lot of work to emulate Perl&#39;s regex functionality.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_29

        ><td class="source">// The tricky changes in this file mostly have the &quot;attacklab:&quot;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_30

        ><td class="source">// label.  Major or self-explanatory changes don&#39;t.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_31

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_32

        ><td class="source">// Smart diff tools like Araxis Merge will be able to match up<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_33

        ><td class="source">// this file with markdown.pl in a useful way.  A little tweaking<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_34

        ><td class="source">// helps: in a copy of markdown.pl, replace &quot;#&quot; with &quot;//&quot; and<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_35

        ><td class="source">// replace &quot;$text&quot; with &quot;text&quot;.  Be sure to ignore whitespace<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_36

        ><td class="source">// and line endings.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_37

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_38

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_39

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_40

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_41

        ><td class="source">// Usage:<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_42

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_43

        ><td class="source">//   var text = &quot;Markdown *rocks*.&quot;;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_44

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_45

        ><td class="source">//   var converter = new Markdown.Converter();<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_46

        ><td class="source">//   var html = converter.makeHtml(text);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_47

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_48

        ><td class="source">//   alert(html);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_49

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_50

        ><td class="source">// Note: move the sample code to the bottom of this<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_51

        ><td class="source">// file before uncommenting it.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_52

        ><td class="source">//<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_53

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_54

        ><td class="source">(function () {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_55

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_56

            ><td class="source">    function identity(x) { return x; }<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_57

            ><td class="source">    function returnFalse(x) { return false; }<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_58

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_59

            ><td class="source">    function HookCollection() { }<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_60

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_61

            ><td class="source">    HookCollection.prototype = {<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_62

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_63

            ><td class="source">        chain: function (hookname, func) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_64

                ><td class="source">            var original = this[hookname];<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_65

                ><td class="source">            if (!original)<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_66

                ><td class="source">                throw new Error(&quot;unknown hook &quot; + hookname);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_67

                ><td class="source"><br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_68

                ><td class="source">            if (original === identity)<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_69

                ><td class="source">                this[hookname] = func;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_70

                ><td class="source">            else<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_71

                ><td class="source">                this[hookname] = function (text) {<br></td></tr
                ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_72

                    ><td class="source">                    var args = Array.prototype.slice.call(arguments, 0);<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_73

                    ><td class="source">                    args[0] = original.apply(null, args);<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_74

                    ><td class="source">                    return func.apply(null, args);<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_75

                    ><td class="source">                };<br></td></tr
                    ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_76

                ><td class="source">        },<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_77

            ><td class="source">        set: function (hookname, func) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_78

                ><td class="source">            if (!this[hookname])<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_79

                ><td class="source">                throw new Error(&quot;unknown hook &quot; + hookname);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_80

                ><td class="source">            this[hookname] = func;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_81

                ><td class="source">        },<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_82

            ><td class="source">        addNoop: function (hookname) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_83

                ><td class="source">            this[hookname] = identity;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_84

                ><td class="source">        },<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_85

            ><td class="source">        addFalse: function (hookname) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_86

                ><td class="source">            this[hookname] = returnFalse;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_87

                ><td class="source">        }<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_88

            ><td class="source">    };<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_89

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_90

        ><td class="source">    Markdown.HookCollection = HookCollection;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_91

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_92

        ><td class="source">    // g_urls and g_titles allow arbitrary user-entered strings as keys. This<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_93

        ><td class="source">    // caused an exception (and hence stopped the rendering) when the user entered<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_94

        ><td class="source">    // e.g. [push] or [__proto__]. Adding a prefix to the actual key prevents this<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_95

        ><td class="source">    // (since no builtin property starts with &quot;s_&quot;). See<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_96

        ><td class="source">    // http://meta.stackexchange.com/questions/64655/strange-wmd-bug<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_97

        ><td class="source">    // (granted, switching from Array() to Object() alone would have left only __proto__<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_98

        ><td class="source">    // to be a problem)<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_99

        ><td class="source">    function SaveHash() { }<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_100

        ><td class="source">    SaveHash.prototype = {<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_101

        ><td class="source">        set: function (key, value) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_102

            ><td class="source">            this[&quot;s_&quot; + key] = value;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_103

            ><td class="source">        },<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_104

        ><td class="source">        get: function (key) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_105

            ><td class="source">            return this[&quot;s_&quot; + key];<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_106

            ><td class="source">        }<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_107

        ><td class="source">    };<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_108

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_109

    ><td class="source">    Markdown.Converter = function (OPTIONS) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_110

        ><td class="source">        var pluginHooks = this.hooks = new HookCollection();<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_111

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_112

        ><td class="source">        // given a URL that was encountered by itself (without markup), should return the link text that&#39;s to be given to this link<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_113

        ><td class="source">        pluginHooks.addNoop(&quot;plainLinkText&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_114

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_115

        ><td class="source">        // called with the orignal text as given to makeHtml. The result of this plugin hook is the actual markdown source that will be cooked<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_116

        ><td class="source">        pluginHooks.addNoop(&quot;preConversion&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_117

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_118

        ><td class="source">        // called with the text once all normalizations have been completed (tabs to spaces, line endings, etc.), but before any conversions have<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_119

        ><td class="source">        pluginHooks.addNoop(&quot;postNormalization&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_120

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_121

        ><td class="source">        // Called with the text before / after creating block elements like code blocks and lists. Note that this is called recursively<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_122

        ><td class="source">        // with inner content, e.g. it&#39;s called with the full text, and then only with the content of a blockquote. The inner<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_123

        ><td class="source">        // call will receive outdented text.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_124

        ><td class="source">        pluginHooks.addNoop(&quot;preBlockGamut&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_125

        ><td class="source">        pluginHooks.addNoop(&quot;postBlockGamut&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_126

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_127

        ><td class="source">        // called with the text of a single block element before / after the span-level conversions (bold, code spans, etc.) have been made<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_128

        ><td class="source">        pluginHooks.addNoop(&quot;preSpanGamut&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_129

        ><td class="source">        pluginHooks.addNoop(&quot;postSpanGamut&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_130

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_131

        ><td class="source">        // called with the final cooked HTML code. The result of this plugin hook is the actual output of makeHtml<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_132

        ><td class="source">        pluginHooks.addNoop(&quot;postConversion&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_133

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_134

        ><td class="source">        //<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_135

        ><td class="source">        // Private state of the converter instance:<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_136

        ><td class="source">        //<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_137

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_138

        ><td class="source">        // Global hashes, used by various utility routines<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_139

        ><td class="source">        var g_urls;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_140

        ><td class="source">        var g_titles;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_141

        ><td class="source">        var g_html_blocks;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_142

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_143

        ><td class="source">        // Used to track when we&#39;re inside an ordered or unordered list<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_144

        ><td class="source">        // (see _ProcessListItems() for details):<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_145

        ><td class="source">        var g_list_level;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_146

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_147

        ><td class="source">        OPTIONS = OPTIONS || {};<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_148

        ><td class="source">        var asciify = identity, deasciify = identity;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_149

        ><td class="source">        if (OPTIONS.nonAsciiLetters) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_150

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_151

            ><td class="source">            /* In JavaScript regular expressions, \w only denotes [a-zA-Z0-9_].<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_152

><td class="source">             * That&#39;s why there&#39;s inconsistent handling e.g. with intra-word bolding<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_153

><td class="source">             * of Japanese words. That&#39;s why we do the following if OPTIONS.nonAsciiLetters<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_154

><td class="source">             * is true:<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_155

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_156

><td class="source">             * Before doing bold and italics, we find every instance<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_157

><td class="source">             * of a unicode word character in the Markdown source that is not<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_158

><td class="source">             * matched by \w, and the letter &quot;Q&quot;. We take the character&#39;s code point<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_159

><td class="source">             * and encode it in base 51, using the &quot;digits&quot;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_160

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_161

><td class="source">             *     A, B, ..., P, R, ..., Y, Z, a, b, ..., y, z<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_162

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_163

><td class="source">             * delimiting it with &quot;Q&quot; on both sides. For example, the source<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_164

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_165

><td class="source">             * &gt; In Chinese, the smurfs are called 藍精靈, meaning &quot;blue spirits&quot;.<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_166

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_167

><td class="source">             * turns into<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_168

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_169

><td class="source">             * &gt; In Chinese, the smurfs are called QNIhQQMOIQQOuUQ, meaning &quot;blue spirits&quot;.<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_170

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_171

><td class="source">             * Since everything that is a letter in Unicode is now a letter (or<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_172

><td class="source">             * several letters) in ASCII, \w and \b should always do the right thing.<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_173

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_174

><td class="source">             * After the bold/italic conversion, we decode again; since &quot;Q&quot; was encoded<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_175

><td class="source">             * alongside all non-ascii characters (as &quot;QBfQ&quot;), and the conversion<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_176

><td class="source">             * will not generate &quot;Q&quot;, the only instances of that letter should be our<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_177

><td class="source">             * encoded characters. And since the conversion will not break words, the<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_178

><td class="source">             * &quot;Q...Q&quot; should all still be in one piece.<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_179

><td class="source">             *<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_180

><td class="source">             * We&#39;re using &quot;Q&quot; as the delimiter because it&#39;s probably one of the<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_181

><td class="source">             * rarest characters, and also because I can&#39;t think of any special behavior<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_182

><td class="source">             * that would ever be triggered by this letter (to use a silly example, if we<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_183

><td class="source">             * delimited with &quot;H&quot; on the left and &quot;P&quot; on the right, then &quot;Ψ&quot; would be<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_184

><td class="source">             * encoded as &quot;HTTP&quot;, which may cause special behavior). The latter would not<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_185

><td class="source">             * actually be a huge issue for bold/italic, but may be if we later use it<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_186

><td class="source">             * in other places as well.<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_187

><td class="source">             * */            <br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_188

            ><td class="source">            (function () {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_189

                ><td class="source">                var lettersThatJavaScriptDoesNotKnowAndQ = /[Q\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u0660-\u0669\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07c0-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0966-\u096f\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0be6-\u0bef\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d66-\u0d6f\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edd\u0f00\u0f20-\u0f29\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f-\u1049\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u1090-\u1099\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1946-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u19d0-\u19d9\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b50-\u1b59\u1b83-\u1ba0\u1bae-\u1bb9\u1c00-\u1c23\u1c40-\u1c49\u1c4d-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u2094\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183-\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua62b\ua640-\ua65f\ua662-\ua66e\ua67f-\ua697\ua717-\ua71f\ua722-\ua788\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8d0-\ua8d9\ua900-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa50-\uaa59\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/g;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_190

                ><td class="source">                var cp_Q = &quot;Q&quot;.charCodeAt(0);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_191

                ><td class="source">                var cp_A = &quot;A&quot;.charCodeAt(0);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_192

                ><td class="source">                var cp_Z = &quot;Z&quot;.charCodeAt(0);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_193

                ><td class="source">                var dist_Za = &quot;a&quot;.charCodeAt(0) - cp_Z - 1;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_194

                ><td class="source">                <br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_195

                ><td class="source">                asciify = function(text) {<br></td></tr
                ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_196

                    ><td class="source">                    return text.replace(lettersThatJavaScriptDoesNotKnowAndQ, function (m) {<br></td></tr
                    ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_197

                        ><td class="source">                        var c = m.charCodeAt(0);<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_198

                        ><td class="source">                        var s = &quot;&quot;;<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_199

                        ><td class="source">                        var v;<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_200

                        ><td class="source">                        while (c &gt; 0) {<br></td></tr
                        ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_201

                            ><td class="source">                            v = (c % 51) + cp_A;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_202

                            ><td class="source">                            if (v &gt;= cp_Q)<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_203

                            ><td class="source">                                v++;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_204

                            ><td class="source">                            if (v &gt; cp_Z)<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_205

                            ><td class="source">                                v += dist_Za;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_206

                            ><td class="source">                            s = String.fromCharCode(v) + s;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_207

                            ><td class="source">                            c = c / 51 | 0;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_208

                            ><td class="source">                        }<br></td></tr
                            ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_209

                        ><td class="source">                        return &quot;Q&quot; + s + &quot;Q&quot;;<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_210

                        ><td class="source">                    })<br></td></tr
                        ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_211

                    ><td class="source">                };<br></td></tr
                    ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_212

                ><td class="source">                <br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_213

                ><td class="source">                deasciify = function(text) {<br></td></tr
                ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_214

                    ><td class="source">                    return text.replace(/Q([A-PR-Za-z]{1,3})Q/g, function (m, s) {<br></td></tr
                    ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_215

                        ><td class="source">                        var c = 0;<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_216

                        ><td class="source">                        var v;<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_217

                        ><td class="source">                        for (var i = 0; i &lt; s.length; i++) {<br></td></tr
                        ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_218

                            ><td class="source">                            v = s.charCodeAt(i);<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_219

                            ><td class="source">                            if (v &gt; cp_Z)<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_220

                            ><td class="source">                                v -= dist_Za;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_221

                            ><td class="source">                            if (v &gt; cp_Q)<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_222

                            ><td class="source">                                v--;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_223

                            ><td class="source">                            v -= cp_A;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_224

                            ><td class="source">                            c = (c * 51) + v;<br></td></tr
                            ><tr
                            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_225

                            ><td class="source">                        }<br></td></tr
                            ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_226

                        ><td class="source">                        return String.fromCharCode(c);<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_227

                        ><td class="source">                    })<br></td></tr
                        ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_228

                    ><td class="source">                }                <br></td></tr
                    ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_229

                ><td class="source">            })();<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_230

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_231

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_232

        ><td class="source">        var _DoItalicsAndBold = OPTIONS.asteriskIntraWordEmphasis ? _DoItalicsAndBold_AllowIntrawordWithAsterisk : _DoItalicsAndBoldStrict;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_233

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_234

        ><td class="source">        this.makeHtml = function (text) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_235

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_236

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_237

            ><td class="source">            // Main function. The order in which other subs are called here is<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_238

            ><td class="source">            // essential. Link and image substitutions need to happen before<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_239

            ><td class="source">            // _EscapeSpecialCharsWithinTagAttributes(), so that any *&#39;s or _&#39;s in the &lt;a&gt;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_240

            ><td class="source">            // and &lt;img&gt; tags get encoded.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_241

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_242

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_243

            ><td class="source">            // This will only happen if makeHtml on the same converter instance is called from a plugin hook.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_244

            ><td class="source">            // Don&#39;t do that.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_245

            ><td class="source">            if (g_urls)<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_246

            ><td class="source">                throw new Error(&quot;Recursive call to converter.makeHtml&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_247

            ><td class="source">        <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_248

            ><td class="source">            // Create the private state objects.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_249

            ><td class="source">            g_urls = new SaveHash();<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_250

            ><td class="source">            g_titles = new SaveHash();<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_251

            ><td class="source">            g_html_blocks = [];<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_252

            ><td class="source">            g_list_level = 0;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_253

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_254

            ><td class="source">            text = pluginHooks.preConversion(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_255

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_256

            ><td class="source">            // attacklab: Replace ~ with ~T<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_257

            ><td class="source">            // This lets us use tilde as an escape char to avoid md5 hashes<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_258

            ><td class="source">            // The choice of character is arbitray; anything that isn&#39;t<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_259

            ><td class="source">            // magic in Markdown will work.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_260

            ><td class="source">            text = text.replace(/~/g, &quot;~T&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_261

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_262

            ><td class="source">            // attacklab: Replace $ with ~D<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_263

            ><td class="source">            // RegExp interprets $ as a special character<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_264

            ><td class="source">            // when it&#39;s in a replacement string<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_265

            ><td class="source">            text = text.replace(/\$/g, &quot;~D&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_266

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_267

            ><td class="source">            // Standardize line endings<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_268

            ><td class="source">            text = text.replace(/\r\n/g, &quot;\n&quot;); // DOS to Unix<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_269

            ><td class="source">            text = text.replace(/\r/g, &quot;\n&quot;); // Mac to Unix<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_270

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_271

            ><td class="source">            // Make sure text begins and ends with a couple of newlines:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_272

            ><td class="source">            text = &quot;\n\n&quot; + text + &quot;\n\n&quot;;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_273

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_274

            ><td class="source">            // Convert all tabs to spaces.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_275

            ><td class="source">            text = _Detab(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_276

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_277

            ><td class="source">            // Strip any lines consisting only of spaces and tabs.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_278

            ><td class="source">            // This makes subsequent regexen easier to write, because we can<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_279

            ><td class="source">            // match consecutive blank lines with /\n+/ instead of something<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_280

            ><td class="source">            // contorted like /[ \t]*\n+/ .<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_281

            ><td class="source">            text = text.replace(/^[ \t]+$/mg, &quot;&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_282

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_283

            ><td class="source">            text = pluginHooks.postNormalization(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_284

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_285

            ><td class="source">            // Turn block-level HTML blocks into hash entries<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_286

            ><td class="source">            text = _HashHTMLBlocks(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_287

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_288

            ><td class="source">            // Strip link definitions, store in hashes.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_289

            ><td class="source">            text = _StripLinkDefinitions(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_290

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_291

            ><td class="source">            text = _RunBlockGamut(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_292

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_293

            ><td class="source">            text = _UnescapeSpecialChars(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_294

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_295

            ><td class="source">            // attacklab: Restore dollar signs<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_296

            ><td class="source">            text = text.replace(/~D/g, &quot;$$&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_297

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_298

            ><td class="source">            // attacklab: Restore tildes<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_299

            ><td class="source">            text = text.replace(/~T/g, &quot;~&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_300

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_301

            ><td class="source">            text = pluginHooks.postConversion(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_302

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_303

            ><td class="source">            g_html_blocks = g_titles = g_urls = null;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_304

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_305

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_306

            ><td class="source">        };<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_307

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_308

        ><td class="source">        function _StripLinkDefinitions(text) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_309

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_310

            ><td class="source">            // Strips link definitions from text, stores the URLs and titles in<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_311

            ><td class="source">            // hash references.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_312

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_313

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_314

            ><td class="source">            // Link defs are in the form: ^[id]: url &quot;optional title&quot;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_315

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_316

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_317

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_318

><td class="source">                ^[ ]{0,3}\[([^\[\]]+)\]:  // id = $1  attacklab: g_tab_width - 1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_319

><td class="source">                [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_320

><td class="source">                \n?                 // maybe *one* newline<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_321

><td class="source">                [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_322

><td class="source">                &lt;?(\S+?)&gt;?          // url = $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_323

><td class="source">                (?=\s|$)            // lookahead for whitespace instead of the lookbehind removed below<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_324

><td class="source">                [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_325

><td class="source">                \n?                 // maybe one newline<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_326

><td class="source">                [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_327

><td class="source">                (                   // (potential) title = $3<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_328

><td class="source">                    (\n*)           // any lines skipped = $4 attacklab: lookbehind removed<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_329

><td class="source">                    [ \t]+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_330

><td class="source">                    [&quot;(]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_331

><td class="source">                    (.+?)           // title = $5<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_332

><td class="source">                    [&quot;)]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_333

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_334

><td class="source">                )?                  // title is optional<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_335

><td class="source">                (?:\n+|$)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_336

><td class="source">            /gm, function(){...});<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_337

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_338

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_339

            ><td class="source">            text = text.replace(/^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*&lt;?(\S+?)&gt;?(?=\s|$)[ \t]*\n?[ \t]*((\n*)[&quot;(](.+?)[&quot;)][ \t]*)?(?:\n+)/gm,<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_340

            ><td class="source">                function (wholeMatch, m1, m2, m3, m4, m5) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_341

                ><td class="source">                    m1 = m1.toLowerCase();<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_342

                ><td class="source">                    g_urls.set(m1, _EncodeAmpsAndAngles(m2));  // Link IDs are case-insensitive<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_343

                ><td class="source">                    if (m4) {<br></td></tr
                ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_344

                    ><td class="source">                        // Oops, found blank lines, so it&#39;s not a title.<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_345

                    ><td class="source">                        // Put back the parenthetical statement we stole.<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_346

                    ><td class="source">                        return m3;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_347

                    ><td class="source">                    } else if (m5) {<br></td></tr
                    ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_348

                        ><td class="source">                        g_titles.set(m1, m5.replace(/&quot;/g, &quot;&amp;quot;&quot;));<br></td></tr
                        ><tr
                        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_349

                        ><td class="source">                    }<br></td></tr
                        ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_350

                ><td class="source"><br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_351

                ><td class="source">                    // Completely remove the definition from the text<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_352

                ><td class="source">                    return &quot;&quot;;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_353

                ><td class="source">                }<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_354

            ><td class="source">            );<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_355

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_356

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_357

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_358

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_359

        ><td class="source">        function _HashHTMLBlocks(text) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_360

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_361

            ><td class="source">            // Hashify HTML blocks:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_362

            ><td class="source">            // We only want to do this for block-level HTML tags, such as headers,<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_363

            ><td class="source">            // lists, and tables. That&#39;s because we still want to wrap &lt;p&gt;s around<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_364

            ><td class="source">            // &quot;paragraphs&quot; that are wrapped in non-block-level tags, such as anchors,<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_365

            ><td class="source">            // phrase emphasis, and spans. The list of tags we&#39;re looking for is<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_366

            ><td class="source">            // hard-coded:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_367

            ><td class="source">            var block_tags_a = &quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del&quot;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_368

            ><td class="source">            var block_tags_b = &quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math&quot;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_369

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_370

            ><td class="source">            // First, look for nested blocks, e.g.:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_371

            ><td class="source">            //   &lt;div&gt;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_372

            ><td class="source">            //     &lt;div&gt;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_373

            ><td class="source">            //     tags for inner block must be indented.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_374

            ><td class="source">            //     &lt;/div&gt;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_375

            ><td class="source">            //   &lt;/div&gt;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_376

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_377

            ><td class="source">            // The outermost tags must start at the left margin for this to match, and<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_378

            ><td class="source">            // the inner nested divs must be indented.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_379

            ><td class="source">            // We need to do this before the next, more liberal match, because the next<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_380

            ><td class="source">            // match will start at the first `&lt;div&gt;` and stop at the first `&lt;/div&gt;`.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_381

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_382

            ><td class="source">            // attacklab: This regex can be expensive when it fails.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_383

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_384

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_385

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_386

><td class="source">                (                       // save in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_387

><td class="source">                    ^                   // start of line  (with /m)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_388

><td class="source">                    &lt;($block_tags_a)    // start tag = $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_389

><td class="source">                    \b                  // word break<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_390

><td class="source">                                        // attacklab: hack around khtml/pcre bug...<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_391

><td class="source">                    [^\r]*?\n           // any number of lines, minimally matching<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_392

><td class="source">                    &lt;/\2&gt;               // the matching end tag<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_393

><td class="source">                    [ \t]*              // trailing spaces/tabs<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_394

><td class="source">                    (?=\n+)             // followed by a newline<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_395

><td class="source">                )                       // attacklab: there are sentinel newlines at end of document<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_396

><td class="source">            /gm,function(){...}};<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_397

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_398

            ><td class="source">            text = text.replace(/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n&lt;\/\2&gt;[ \t]*(?=\n+))/gm, hashMatch);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_399

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_400

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_401

            ><td class="source">            // Now match more liberally, simply from `\n&lt;tag&gt;` to `&lt;/tag&gt;\n`<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_402

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_403

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_404

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_405

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_406

><td class="source">                (                       // save in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_407

><td class="source">                    ^                   // start of line  (with /m)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_408

><td class="source">                    &lt;($block_tags_b)    // start tag = $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_409

><td class="source">                    \b                  // word break<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_410

><td class="source">                                        // attacklab: hack around khtml/pcre bug...<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_411

><td class="source">                    [^\r]*?             // any number of lines, minimally matching<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_412

><td class="source">                    .*&lt;/\2&gt;             // the matching end tag<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_413

><td class="source">                    [ \t]*              // trailing spaces/tabs<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_414

><td class="source">                    (?=\n+)             // followed by a newline<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_415

><td class="source">                )                       // attacklab: there are sentinel newlines at end of document<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_416

><td class="source">            /gm,function(){...}};<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_417

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_418

            ><td class="source">            text = text.replace(/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*&lt;\/\2&gt;[ \t]*(?=\n+)\n)/gm, hashMatch);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_419

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_420

            ><td class="source">            // Special case just for &lt;hr /&gt;. It was easier to make a special case than<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_421

            ><td class="source">            // to make the other regex more complicated.  <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_422

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_423

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_424

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_425

><td class="source">                \n                  // Starting after a blank line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_426

><td class="source">                [ ]{0,3}<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_427

><td class="source">                (                   // save in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_428

><td class="source">                    (&lt;(hr)          // start tag = $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_429

><td class="source">                        \b          // word break<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_430

><td class="source">                        ([^&lt;&gt;])*?<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_431

><td class="source">                    \/?&gt;)           // the matching end tag<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_432

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_433

><td class="source">                    (?=\n{2,})      // followed by a blank line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_434

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_435

><td class="source">            /g,hashMatch);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_436

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_437

            ><td class="source">            text = text.replace(/\n[ ]{0,3}((&lt;(hr)\b([^&lt;&gt;])*?\/?&gt;)[ \t]*(?=\n{2,}))/g, hashMatch);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_438

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_439

            ><td class="source">            // Special case for standalone HTML comments:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_440

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_441

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_442

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_443

><td class="source">                \n\n                                            // Starting after a blank line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_444

><td class="source">                [ ]{0,3}                                        // attacklab: g_tab_width - 1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_445

><td class="source">                (                                               // save in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_446

><td class="source">                    &lt;!<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_447

><td class="source">                    (--(?:|(?:[^&gt;-]|-[^&gt;])(?:[^-]|-[^-])*)--)   // see http://www.w3.org/TR/html-markup/syntax.html#comments and http://meta.stackexchange.com/q/95256<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_448

><td class="source">                    &gt;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_449

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_450

><td class="source">                    (?=\n{2,})                                  // followed by a blank line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_451

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_452

><td class="source">            /g,hashMatch);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_453

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_454

            ><td class="source">            text = text.replace(/\n\n[ ]{0,3}(&lt;!(--(?:|(?:[^&gt;-]|-[^&gt;])(?:[^-]|-[^-])*)--)&gt;[ \t]*(?=\n{2,}))/g, hashMatch);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_455

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_456

            ><td class="source">            // PHP and ASP-style processor instructions (&lt;?...?&gt; and &lt;%...%&gt;)<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_457

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_458

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_459

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_460

><td class="source">                (?:<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_461

><td class="source">                    \n\n            // Starting after a blank line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_462

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_463

><td class="source">                (                   // save in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_464

><td class="source">                    [ ]{0,3}        // attacklab: g_tab_width - 1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_465

><td class="source">                    (?:<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_466

><td class="source">                        &lt;([?%])     // $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_467

><td class="source">                        [^\r]*?<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_468

><td class="source">                        \2&gt;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_469

><td class="source">                    )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_470

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_471

><td class="source">                    (?=\n{2,})      // followed by a blank line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_472

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_473

><td class="source">            /g,hashMatch);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_474

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_475

            ><td class="source">            text = text.replace(/(?:\n\n)([ ]{0,3}(?:&lt;([?%])[^\r]*?\2&gt;)[ \t]*(?=\n{2,}))/g, hashMatch);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_476

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_477

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_478

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_479

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_480

        ><td class="source">        function hashBlock(text) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_481

            ><td class="source">            text = text.replace(/(^\n+|\n+$)/g, &quot;&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_482

            ><td class="source">            // Replace the element text with a marker (&quot;~KxK&quot; where x is its key)<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_483

            ><td class="source">            return &quot;\n\n~K&quot; + (g_html_blocks.push(text) - 1) + &quot;K\n\n&quot;;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_484

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_485

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_486

        ><td class="source">        function hashMatch(wholeMatch, m1) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_487

            ><td class="source">            return hashBlock(m1);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_488

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_489

        ><td class="source">        <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_490

        ><td class="source">        var blockGamutHookCallback = function (t) { return _RunBlockGamut(t); }<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_491

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_492

        ><td class="source">        function _RunBlockGamut(text, doNotUnhash) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_493

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_494

            ><td class="source">            // These are all the transformations that form block-level<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_495

            ><td class="source">            // tags like paragraphs, headers, and list items.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_496

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_497

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_498

            ><td class="source">            text = pluginHooks.preBlockGamut(text, blockGamutHookCallback);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_499

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_500

            ><td class="source">            text = _DoHeaders(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_501

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_502

            ><td class="source">            // Do Horizontal Rules:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_503

            ><td class="source">            var replacement = &quot;&lt;hr /&gt;\n&quot;;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_504

            ><td class="source">            text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, replacement);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_505

            ><td class="source">            text = text.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, replacement);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_506

            ><td class="source">            text = text.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, replacement);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_507

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_508

            ><td class="source">            text = _DoLists(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_509

            ><td class="source">            text = _DoCodeBlocks(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_510

            ><td class="source">            text = _DoBlockQuotes(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_511

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_512

            ><td class="source">            text = pluginHooks.postBlockGamut(text, blockGamutHookCallback);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_513

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_514

            ><td class="source">            // We already ran _HashHTMLBlocks() before, in Markdown(), but that<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_515

            ><td class="source">            // was to escape raw HTML in the original Markdown source. This time,<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_516

            ><td class="source">            // we&#39;re escaping the markup we&#39;ve just created, so that we don&#39;t wrap<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_517

            ><td class="source">            // &lt;p&gt; tags around block-level tags.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_518

            ><td class="source">            text = _HashHTMLBlocks(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_519

            ><td class="source">            text = _FormParagraphs(text, doNotUnhash);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_520

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_521

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_522

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_523

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_524

        ><td class="source">        function _RunSpanGamut(text) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_525

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_526

            ><td class="source">            // These are all the transformations that occur *within* block-level<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_527

            ><td class="source">            // tags like paragraphs, headers, and list items.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_528

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_529

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_530

            ><td class="source">            text = pluginHooks.preSpanGamut(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_531

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_532

            ><td class="source">            text = _DoCodeSpans(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_533

            ><td class="source">            text = _EscapeSpecialCharsWithinTagAttributes(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_534

            ><td class="source">            text = _EncodeBackslashEscapes(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_535

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_536

            ><td class="source">            // Process anchor and image tags. Images must come first,<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_537

            ><td class="source">            // because ![foo][f] looks like an anchor.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_538

            ><td class="source">            text = _DoImages(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_539

            ><td class="source">            text = _DoAnchors(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_540

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_541

            ><td class="source">            // Make links out of things like `&lt;http://example.com/&gt;`<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_542

            ><td class="source">            // Must come after _DoAnchors(), because you can use &lt; and &gt;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_543

            ><td class="source">            // delimiters in inline links like [this](&lt;url&gt;).<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_544

            ><td class="source">            text = _DoAutoLinks(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_545

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_546

            ><td class="source">            text = text.replace(/~P/g, &quot;://&quot;); // put in place to prevent autolinking; reset now<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_547

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_548

            ><td class="source">            text = _EncodeAmpsAndAngles(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_549

            ><td class="source">            text = _DoItalicsAndBold(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_550

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_551

            ><td class="source">            // Do hard breaks:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_552

            ><td class="source">            text = text.replace(/  +\n/g, &quot; &lt;br&gt;\n&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_553

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_554

            ><td class="source">            text = pluginHooks.postSpanGamut(text);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_555

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_556

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_557

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_558

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_559

        ><td class="source">        function _EscapeSpecialCharsWithinTagAttributes(text) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_560

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_561

            ><td class="source">            // Within tags -- meaning between &lt; and &gt; -- encode [\ ` * _] so they<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_562

            ><td class="source">            // don&#39;t conflict with their use in Markdown for code, italics and strong.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_563

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_564

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_565

            ><td class="source">            // Build a regex to find HTML tags and comments.  See Friedl&#39;s <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_566

            ><td class="source">            // &quot;Mastering Regular Expressions&quot;, 2nd Ed., pp. 200-201.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_567

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_568

            ><td class="source">            // SE: changed the comment part of the regex<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_569

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_570

            ><td class="source">            var regex = /(&lt;[a-z\/!$](&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*&gt;|&lt;!(--(?:|(?:[^&gt;-]|-[^&gt;])(?:[^-]|-[^-])*)--)&gt;)/gi;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_571

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_572

            ><td class="source">            text = text.replace(regex, function (wholeMatch) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_573

                ><td class="source">                var tag = wholeMatch.replace(/(.)&lt;\/?code&gt;(?=.)/g, &quot;$1`&quot;);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_574

                ><td class="source">                tag = escapeCharacters(tag, wholeMatch.charAt(1) == &quot;!&quot; ? &quot;\\`*_/&quot; : &quot;\\`*_&quot;); // also escape slashes in comments to prevent autolinking there -- http://meta.stackexchange.com/questions/95987<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_575

                ><td class="source">                return tag;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_576

                ><td class="source">            });<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_577

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_578

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_579

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_580

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_581

        ><td class="source">        function _DoAnchors(text) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_582

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_583

            ><td class="source">            if (text.indexOf(&quot;[&quot;) === -1)<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_584

            ><td class="source">                return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_585

            ><td class="source">            <br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_586

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_587

            ><td class="source">            // Turn Markdown link shortcuts into XHTML &lt;a&gt; tags.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_588

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_589

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_590

            ><td class="source">            // First, handle reference-style links: [link text] [id]<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_591

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_592

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_593

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_594

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_595

><td class="source">                (                           // wrap whole match in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_596

><td class="source">                    \[<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_597

><td class="source">                    (<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_598

><td class="source">                        (?:<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_599

><td class="source">                            \[[^\]]*\]      // allow brackets nested one level<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_600

><td class="source">                            |<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_601

><td class="source">                            [^\[]           // or anything else<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_602

><td class="source">                        )*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_603

><td class="source">                    )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_604

><td class="source">                    \]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_605

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_606

><td class="source">                    [ ]?                    // one optional space<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_607

><td class="source">                    (?:\n[ ]*)?             // one optional newline followed by spaces<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_608

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_609

><td class="source">                    \[<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_610

><td class="source">                    (.*?)                   // id = $3<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_611

><td class="source">                    \]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_612

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_613

><td class="source">                ()()()()                    // pad remaining backreferences<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_614

><td class="source">            /g, writeAnchorTag);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_615

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_616

            ><td class="source">            text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_617

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_618

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_619

            ><td class="source">            // Next, inline-style links: [link text](url &quot;optional title&quot;)<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_620

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_621

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_622

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_623

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_624

><td class="source">                (                           // wrap whole match in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_625

><td class="source">                    \[<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_626

><td class="source">                    (<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_627

><td class="source">                        (?:<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_628

><td class="source">                            \[[^\]]*\]      // allow brackets nested one level<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_629

><td class="source">                            |<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_630

><td class="source">                            [^\[\]]         // or anything else<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_631

><td class="source">                        )*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_632

><td class="source">                    )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_633

><td class="source">                    \]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_634

><td class="source">                    \(                      // literal paren<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_635

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_636

><td class="source">                    ()                      // no id, so leave $3 empty<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_637

><td class="source">                    &lt;?(                     // href = $4<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_638

><td class="source">                        (?:<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_639

><td class="source">                            \([^)]*\)       // allow one level of (correctly nested) parens (think MSDN)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_640

><td class="source">                            |<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_641

><td class="source">                            [^()\s]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_642

><td class="source">                        )*?<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_643

><td class="source">                    )&gt;?                <br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_644

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_645

><td class="source">                    (                       // $5<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_646

><td class="source">                        ([&#39;&quot;])              // quote char = $6<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_647

><td class="source">                        (.*?)               // Title = $7<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_648

><td class="source">                        \6                  // matching quote<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_649

><td class="source">                        [ \t]*              // ignore any spaces/tabs between closing quote and )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_650

><td class="source">                    )?                      // title is optional<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_651

><td class="source">                    \)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_652

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_653

><td class="source">            /g, writeAnchorTag);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_654

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_655

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_656

            ><td class="source">            text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()&lt;?((?:\([^)]*\)|[^()\s])*?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_657

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_658

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_659

            ><td class="source">            // Last, handle reference-style shortcuts: [link text]<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_660

            ><td class="source">            // These must come last in case you&#39;ve also got [link test][1]<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_661

            ><td class="source">            // or [link test](/foo)<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_662

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_663

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_664

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_665

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_666

><td class="source">                (                   // wrap whole match in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_667

><td class="source">                    \[<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_668

><td class="source">                    ([^\[\]]+)      // link text = $2; can&#39;t contain &#39;[&#39; or &#39;]&#39;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_669

><td class="source">                    \]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_670

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_671

><td class="source">                ()()()()()          // pad rest of backreferences<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_672

><td class="source">            /g, writeAnchorTag);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_673

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_674

            ><td class="source">            text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_675

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_676

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_677

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_678

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_679

        ><td class="source">        function writeAnchorTag(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_680

            ><td class="source">            if (m7 == undefined) m7 = &quot;&quot;;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_681

            ><td class="source">            var whole_match = m1;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_682

            ><td class="source">            var link_text = m2.replace(/:\/\//g, &quot;~P&quot;); // to prevent auto-linking withing the link. will be converted back after the auto-linker runs<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_683

            ><td class="source">            var link_id = m3.toLowerCase();<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_684

            ><td class="source">            var url = m4;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_685

            ><td class="source">            var title = m7;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_686

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_687

            ><td class="source">            if (url == &quot;&quot;) {<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_688

            ><td class="source">                if (link_id == &quot;&quot;) {<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_689

            ><td class="source">                    // lower-case and turn embedded newlines into spaces<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_690

            ><td class="source">                    link_id = link_text.toLowerCase().replace(/ ?\n/g, &quot; &quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_691

            ><td class="source">                }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_692

        ><td class="source">                url = &quot;#&quot; + link_id;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_693

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_694

        ><td class="source">                if (g_urls.get(link_id) != undefined) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_695

            ><td class="source">                    url = g_urls.get(link_id);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_696

            ><td class="source">                    if (g_titles.get(link_id) != undefined) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_697

                ><td class="source">                        title = g_titles.get(link_id);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_698

                ><td class="source">                    }<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_699

            ><td class="source">                }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_700

        ><td class="source">                else {<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_701

        ><td class="source">                    if (whole_match.search(/\(\s*\)$/m) &gt; -1) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_702

            ><td class="source">                        // Special case for explicit empty url<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_703

            ><td class="source">                        url = &quot;&quot;;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_704

            ><td class="source">                    } else {<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_705

        ><td class="source">                        return whole_match;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_706

        ><td class="source">                    }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_707

    ><td class="source">                }<br></td></tr
    ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_708

     ><td class="source">            }<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_709

     ><td class="source">            url = attributeSafeUrl(url);<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_710

     ><td class="source"><br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_711

     ><td class="source">            var result = &quot;&lt;a href=\&quot;&quot; + url + &quot;\&quot;&quot;;<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_712

     ><td class="source"><br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_713

     ><td class="source">            if (title != &quot;&quot;) {<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_714

     ><td class="source">                title = attributeEncode(title);<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_715

     ><td class="source">                title = escapeCharacters(title, &quot;*_&quot;);<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_716

     ><td class="source">                result += &quot; title=\&quot;&quot; + title + &quot;\&quot;&quot;;<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_717

     ><td class="source">            }<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_718

     ><td class="source"><br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_719

     ><td class="source">            result += &quot;&gt;&quot; + link_text + &quot;&lt;/a&gt;&quot;;<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_720

     ><td class="source"><br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_721

     ><td class="source">            return result;<br></td></tr
     ><tr
     id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_722

     ><td class="source">        }<br></td></tr
     ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_723

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_724

><td class="source">        function _DoImages(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_725

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_726

    ><td class="source">            if (text.indexOf(&quot;![&quot;) === -1)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_727

    ><td class="source">                return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_728

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_729

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_730

    ><td class="source">            // Turn Markdown image shortcuts into &lt;img&gt; tags.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_731

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_732

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_733

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_734

    ><td class="source">            // First, handle reference-style labeled images: ![alt text][id]<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_735

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_736

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_737

    ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_738

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_739

><td class="source">                (                   // wrap whole match in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_740

><td class="source">                    !\[<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_741

><td class="source">                    (.*?)           // alt text = $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_742

><td class="source">                    \]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_743

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_744

><td class="source">                    [ ]?            // one optional space<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_745

><td class="source">                    (?:\n[ ]*)?     // one optional newline followed by spaces<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_746

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_747

><td class="source">                    \[<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_748

><td class="source">                    (.*?)           // id = $3<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_749

><td class="source">                    \]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_750

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_751

><td class="source">                ()()()()            // pad rest of backreferences<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_752

><td class="source">            /g, writeImageTag);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_753

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_754

    ><td class="source">            text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeImageTag);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_755

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_756

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_757

    ><td class="source">            // Next, handle inline images:  ![alt text](url &quot;optional title&quot;)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_758

    ><td class="source">            // Don&#39;t forget: encode * and _<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_759

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_760

    ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_761

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_762

><td class="source">                (                   // wrap whole match in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_763

><td class="source">                    !\[<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_764

><td class="source">                    (.*?)           // alt text = $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_765

><td class="source">                    \]<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_766

><td class="source">                    \s?             // One optional whitespace character<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_767

><td class="source">                    \(              // literal paren<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_768

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_769

><td class="source">                    ()              // no id, so leave $3 empty<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_770

><td class="source">                    &lt;?(\S+?)&gt;?      // src url = $4<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_771

><td class="source">                    [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_772

><td class="source">                    (               // $5<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_773

><td class="source">                        ([&#39;&quot;])      // quote char = $6<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_774

><td class="source">                        (.*?)       // title = $7<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_775

><td class="source">                        \6          // matching quote<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_776

><td class="source">                        [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_777

><td class="source">                    )?              // title is optional<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_778

><td class="source">                    \)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_779

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_780

><td class="source">            /g, writeImageTag);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_781

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_782

    ><td class="source">            text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()&lt;?(\S+?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g, writeImageTag);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_783

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_784

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_785

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_786

><td class="source">        <br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_787

><td class="source">        function attributeEncode(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_788

    ><td class="source">            // unconditionally replace angle brackets here -- what ends up in an attribute (e.g. alt or title)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_789

    ><td class="source">            // never makes sense to have verbatim HTML in it (and the sanitizer would totally break it)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_790

    ><td class="source">            return text.replace(/&gt;/g, &quot;&amp;gt;&quot;).replace(/&lt;/g, &quot;&amp;lt;&quot;).replace(/&quot;/g, &quot;&amp;quot;&quot;).replace(/&#39;/g, &quot;&amp;#39;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_791

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_792

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_793

><td class="source">        function writeImageTag(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_794

    ><td class="source">            var whole_match = m1;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_795

    ><td class="source">            var alt_text = m2;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_796

    ><td class="source">            var link_id = m3.toLowerCase();<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_797

    ><td class="source">            var url = m4;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_798

    ><td class="source">            var title = m7;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_799

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_800

    ><td class="source">            if (!title) title = &quot;&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_801

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_802

    ><td class="source">            if (url == &quot;&quot;) {<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_803

    ><td class="source">                if (link_id == &quot;&quot;) {<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_804

    ><td class="source">                    // lower-case and turn embedded newlines into spaces<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_805

    ><td class="source">                    link_id = alt_text.toLowerCase().replace(/ ?\n/g, &quot; &quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_806

    ><td class="source">                }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_807

><td class="source">                url = &quot;#&quot; + link_id;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_808

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_809

><td class="source">                if (g_urls.get(link_id) != undefined) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_810

    ><td class="source">                    url = g_urls.get(link_id);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_811

    ><td class="source">                    if (g_titles.get(link_id) != undefined) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_812

        ><td class="source">                        title = g_titles.get(link_id);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_813

        ><td class="source">                    }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_814

    ><td class="source">                }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_815

><td class="source">                else {<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_816

><td class="source">                    return whole_match;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_817

><td class="source">                }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_818

><td class="source">            }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_819

><td class="source">            <br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_820

><td class="source">            alt_text = escapeCharacters(attributeEncode(alt_text), &quot;*_[]()&quot;);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_821

><td class="source">            url = escapeCharacters(url, &quot;*_&quot;);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_822

><td class="source">            var result = &quot;&lt;img src=\&quot;&quot; + url + &quot;\&quot; alt=\&quot;&quot; + alt_text + &quot;\&quot;&quot;;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_823

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_824

><td class="source">            // attacklab: Markdown.pl adds empty title attributes to images.<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_825

><td class="source">            // Replicate this bug.<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_826

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_827

><td class="source">            //if (title != &quot;&quot;) {<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_828

><td class="source">            title = attributeEncode(title);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_829

><td class="source">            title = escapeCharacters(title, &quot;*_&quot;);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_830

><td class="source">            result += &quot; title=\&quot;&quot; + title + &quot;\&quot;&quot;;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_831

><td class="source">            //}<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_832

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_833

><td class="source">            result += &quot; /&gt;&quot;;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_834

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_835

><td class="source">            return result;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_836

><td class="source">        }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_837

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_838

><td class="source">        function _DoHeaders(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_839

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_840

    ><td class="source">            // Setext-style headers:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_841

    ><td class="source">            //  Header 1<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_842

    ><td class="source">            //  ========<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_843

    ><td class="source">            //  <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_844

    ><td class="source">            //  Header 2<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_845

    ><td class="source">            //  --------<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_846

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_847

    ><td class="source">            text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_848

    ><td class="source">                function (wholeMatch, m1) { return &quot;&lt;h1&gt;&quot; + _RunSpanGamut(m1) + &quot;&lt;/h1&gt;\n\n&quot;; }<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_849

        ><td class="source">            );<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_850

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_851

        ><td class="source">            text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_852

        ><td class="source">                function (matchFound, m1) { return &quot;&lt;h2&gt;&quot; + _RunSpanGamut(m1) + &quot;&lt;/h2&gt;\n\n&quot;; }<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_853

            ><td class="source">            );<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_854

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_855

            ><td class="source">            // atx-style headers:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_856

            ><td class="source">            //  # Header 1<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_857

            ><td class="source">            //  ## Header 2<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_858

            ><td class="source">            //  ## Header 2 with closing hashes ##<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_859

            ><td class="source">            //  ...<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_860

            ><td class="source">            //  ###### Header 6<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_861

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_862

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_863

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_864

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_865

><td class="source">                ^(\#{1,6})      // $1 = string of #&#39;s<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_866

><td class="source">                [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_867

><td class="source">                (.+?)           // $2 = Header text<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_868

><td class="source">                [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_869

><td class="source">                \#*             // optional closing #&#39;s (not counted)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_870

><td class="source">                \n+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_871

><td class="source">            /gm, function() {...});<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_872

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_873

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_874

            ><td class="source">            text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_875

            ><td class="source">                function (wholeMatch, m1, m2) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_876

                ><td class="source">                    var h_level = m1.length;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_877

                ><td class="source">                    return &quot;&lt;h&quot; + h_level + &quot;&gt;&quot; + _RunSpanGamut(m2) + &quot;&lt;/h&quot; + h_level + &quot;&gt;\n\n&quot;;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_878

                ><td class="source">                }<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_879

            ><td class="source">            );<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_880

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_881

            ><td class="source">            return text;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_882

            ><td class="source">        }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_883

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_884

        ><td class="source">        function _DoLists(text, isInsideParagraphlessListItem) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_885

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_886

            ><td class="source">            // Form HTML ordered (numbered) and unordered (bulleted) lists.<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_887

            ><td class="source">            //<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_888

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_889

            ><td class="source">            // attacklab: add sentinel to hack around khtml/safari bug:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_890

            ><td class="source">            // http://bugs.webkit.org/show_bug.cgi?id=11231<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_891

            ><td class="source">            text += &quot;~0&quot;;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_892

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_893

            ><td class="source">            // Re-usable pattern to match any entirel ul or ol list:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_894

            ><td class="source"><br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_895

            ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_896

><td class="source">            var whole_list = /<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_897

><td class="source">                (                                   // $1 = whole list<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_898

><td class="source">                    (                               // $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_899

><td class="source">                        [ ]{0,3}                    // attacklab: g_tab_width - 1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_900

><td class="source">                        ([*+-]|\d+[.])              // $3 = first list item marker<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_901

><td class="source">                        [ \t]+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_902

><td class="source">                    )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_903

><td class="source">                    [^\r]+?<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_904

><td class="source">                    (                               // $4<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_905

><td class="source">                        ~0                          // sentinel for workaround; should be $<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_906

><td class="source">                        |<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_907

><td class="source">                        \n{2,}<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_908

><td class="source">                        (?=\S)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_909

><td class="source">                        (?!                         // Negative lookahead for another list item marker<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_910

><td class="source">                            [ \t]*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_911

><td class="source">                            (?:[*+-]|\d+[.])[ \t]+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_912

><td class="source">                        )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_913

><td class="source">                    )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_914

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_915

><td class="source">            /g<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_916

><td class="source">            */<br></td></tr
><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_917

            ><td class="source">            var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_918

            ><td class="source">            if (g_list_level) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_919

                ><td class="source">                text = text.replace(whole_list, function (wholeMatch, m1, m2) {<br></td></tr
                ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_920

                    ><td class="source">                    var list = m1;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_921

                    ><td class="source">                    var list_type = (m2.search(/[*+-]/g) &gt; -1) ? &quot;ul&quot; : &quot;ol&quot;;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_922

                    ><td class="source">                    var first_number;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_923

                    ><td class="source">                    if (list_type === &quot;ol&quot;)<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_924

                    ><td class="source">                        first_number = parseInt(m2, 10)<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_925

                    ><td class="source"><br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_926

                    ><td class="source">                    var result = _ProcessListItems(list, list_type, isInsideParagraphlessListItem);<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_927

                    ><td class="source"><br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_928

                    ><td class="source">                    // Trim any trailing whitespace, to put the closing `&lt;/$list_type&gt;`<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_929

                    ><td class="source">                    // up on the preceding line, to get it past the current stupid<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_930

                    ><td class="source">                    // HTML block parser. This is a hack to work around the terrible<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_931

                    ><td class="source">                    // hack that is the HTML block parser.<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_932

                    ><td class="source">                    result = result.replace(/\s+$/, &quot;&quot;);<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_933

                    ><td class="source">                    var opening = &quot;&lt;&quot; + list_type;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_934

                    ><td class="source">                    if (first_number &amp;&amp; first_number !== 1)<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_935

                    ><td class="source">                        opening += &quot; start=\&quot;&quot; + first_number + &quot;\&quot;&quot;;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_936

                    ><td class="source">                    result = opening + &quot;&gt;&quot; + result + &quot;&lt;/&quot; + list_type + &quot;&gt;\n&quot;;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_937

                    ><td class="source">                    return result;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_938

                    ><td class="source">                });<br></td></tr
                    ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_939

                ><td class="source">            } else {<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_940

            ><td class="source">                whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_941

            ><td class="source">                text = text.replace(whole_list, function (wholeMatch, m1, m2, m3) {<br></td></tr
            ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_942

                ><td class="source">                    var runup = m1;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_943

                ><td class="source">                    var list = m2;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_944

                ><td class="source"><br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_945

                ><td class="source">                    var list_type = (m3.search(/[*+-]/g) &gt; -1) ? &quot;ul&quot; : &quot;ol&quot;;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_946

                ><td class="source"><br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_947

                ><td class="source">                    var first_number;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_948

                ><td class="source">                    if (list_type === &quot;ol&quot;)<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_949

                ><td class="source">                        first_number = parseInt(m3, 10)<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_950

                ><td class="source"><br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_951

                ><td class="source">                    var result = _ProcessListItems(list, list_type);<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_952

                ><td class="source">                    var opening = &quot;&lt;&quot; + list_type;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_953

                ><td class="source">                    if (first_number &amp;&amp; first_number !== 1)<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_954

                ><td class="source">                        opening += &quot; start=\&quot;&quot; + first_number + &quot;\&quot;&quot;;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_955

                ><td class="source"><br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_956

                ><td class="source">                    result = runup + opening + &quot;&gt;\n&quot; + result + &quot;&lt;/&quot; + list_type + &quot;&gt;\n&quot;;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_957

                ><td class="source">                    return result;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_958

                ><td class="source">                });<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_959

            ><td class="source">            }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_960

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_961

        ><td class="source">            // attacklab: strip sentinel<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_962

        ><td class="source">            text = text.replace(/~0/, &quot;&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_963

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_964

        ><td class="source">            return text;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_965

        ><td class="source">        }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_966

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_967

    ><td class="source">        var _listItemMarkers = { ol: &quot;\\d+[.]&quot;, ul: &quot;[*+-]&quot; };<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_968

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_969

><td class="source">        function _ProcessListItems(list_str, list_type, isInsideParagraphlessListItem) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_970

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_971

    ><td class="source">            //  Process the contents of a single ordered or unordered list, splitting it<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_972

    ><td class="source">            //  into individual list items.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_973

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_974

    ><td class="source">            //  list_type is either &quot;ul&quot; or &quot;ol&quot;.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_975

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_976

    ><td class="source">            // The $g_list_level global keeps track of when we&#39;re inside a list.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_977

    ><td class="source">            // Each time we enter a list, we increment it; when we leave a list,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_978

    ><td class="source">            // we decrement. If it&#39;s zero, we&#39;re not in a list anymore.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_979

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_980

    ><td class="source">            // We do this because when we&#39;re not inside a list, we want to treat<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_981

    ><td class="source">            // something like this:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_982

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_983

    ><td class="source">            //    I recommend upgrading to version<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_984

    ><td class="source">            //    8. Oops, now this line is treated<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_985

    ><td class="source">            //    as a sub-list.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_986

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_987

    ><td class="source">            // As a single paragraph, despite the fact that the second line starts<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_988

    ><td class="source">            // with a digit-period-space sequence.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_989

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_990

    ><td class="source">            // Whereas when we&#39;re inside a list (or sub-list), that line will be<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_991

    ><td class="source">            // treated as the start of a sub-list. What a kludge, huh? This is<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_992

    ><td class="source">            // an aspect of Markdown&#39;s syntax that&#39;s hard to parse perfectly<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_993

    ><td class="source">            // without resorting to mind-reading. Perhaps the solution is to<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_994

    ><td class="source">            // change the syntax rules such that sub-lists must start with a<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_995

    ><td class="source">            // starting cardinal number; e.g. &quot;1.&quot; or &quot;a.&quot;.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_996

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_997

    ><td class="source">            g_list_level++;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_998

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_999

    ><td class="source">            // trim trailing blank lines:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1000

    ><td class="source">            list_str = list_str.replace(/\n{2,}$/, &quot;\n&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1001

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1002

    ><td class="source">            // attacklab: add sentinel to emulate \z<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1003

    ><td class="source">            list_str += &quot;~0&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1004

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1005

    ><td class="source">            // In the original attacklab showdown, list_type was not given to this function, and anything<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1006

    ><td class="source">            // that matched /[*+-]|\d+[.]/ would just create the next &lt;li&gt;, causing this mismatch:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1007

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1008

    ><td class="source">            //  Markdown          rendered by WMD        rendered by MarkdownSharp<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1009

    ><td class="source">            //  ------------------------------------------------------------------<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1010

    ><td class="source">            //  1. first          1. first               1. first<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1011

    ><td class="source">            //  2. second         2. second              2. second<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1012

    ><td class="source">            //  - third           3. third                   * third<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1013

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1014

    ><td class="source">            // We changed this to behave identical to MarkdownSharp. This is the constructed RegEx,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1015

    ><td class="source">            // with {MARKER} being one of \d+[.] or [*+-], depending on list_type:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1016

    ><td class="source">        <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1017

    ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1018

><td class="source">            list_str = list_str.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1019

><td class="source">                (^[ \t]*)                       // leading whitespace = $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1020

><td class="source">                ({MARKER}) [ \t]+               // list marker = $2<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1021

><td class="source">                ([^\r]+?                        // list item text   = $3<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1022

><td class="source">                    (\n+)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1023

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1024

><td class="source">                (?=<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1025

><td class="source">                    (~0 | \2 ({MARKER}) [ \t]+)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1026

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1027

><td class="source">            /gm, function(){...});<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1028

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1029

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1030

    ><td class="source">            var marker = _listItemMarkers[list_type];<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1031

    ><td class="source">            var re = new RegExp(&quot;(^[ \\t]*)(&quot; + marker + &quot;)[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(&quot; + marker + &quot;)[ \\t]+))&quot;, &quot;gm&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1032

    ><td class="source">            var last_item_had_a_double_newline = false;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1033

    ><td class="source">            list_str = list_str.replace(re,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1034

    ><td class="source">                function (wholeMatch, m1, m2, m3) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1035

        ><td class="source">                    var item = m3;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1036

        ><td class="source">                    var leading_space = m1;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1037

        ><td class="source">                    var ends_with_double_newline = /\n\n$/.test(item);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1038

        ><td class="source">                    var contains_double_newline = ends_with_double_newline || item.search(/\n{2,}/) &gt; -1;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1039

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1040

        ><td class="source">                    if (contains_double_newline || last_item_had_a_double_newline) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1041

            ><td class="source">                        item = _RunBlockGamut(_Outdent(item), /* doNotUnhash = */true);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1042

            ><td class="source">                    }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1043

        ><td class="source">                    else {<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1044

        ><td class="source">                        // Recursion for sub-lists:<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1045

        ><td class="source">                        item = _DoLists(_Outdent(item), /* isInsideParagraphlessListItem= */ true);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1046

        ><td class="source">                        item = item.replace(/\n$/, &quot;&quot;); // chomp(item)<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1047

        ><td class="source">                        if (!isInsideParagraphlessListItem) // only the outer-most item should run this, otherwise it&#39;s run multiple times for the inner ones<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1048

        ><td class="source">                            item = _RunSpanGamut(item);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1049

        ><td class="source">                    }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1050

    ><td class="source">                    last_item_had_a_double_newline = ends_with_double_newline;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1051

    ><td class="source">                    return &quot;&lt;li&gt;&quot; + item + &quot;&lt;/li&gt;\n&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1052

    ><td class="source">                }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1053

><td class="source">            );<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1054

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1055

><td class="source">            // attacklab: strip sentinel<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1056

><td class="source">            list_str = list_str.replace(/~0/g, &quot;&quot;);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1057

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1058

><td class="source">            g_list_level--;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1059

><td class="source">            return list_str;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1060

><td class="source">        }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1061

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1062

><td class="source">        function _DoCodeBlocks(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1063

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1064

    ><td class="source">            //  Process Markdown `&lt;pre&gt;&lt;code&gt;` blocks.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1065

    ><td class="source">            //  <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1066

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1067

    ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1068

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1069

><td class="source">                (?:\n\n|^)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1070

><td class="source">                (                               // $1 = the code block -- one or more lines, starting with a space/tab<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1071

><td class="source">                    (?:<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1072

><td class="source">                        (?:[ ]{4}|\t)           // Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1073

><td class="source">                        .*\n+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1074

><td class="source">                    )+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1075

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1076

><td class="source">                (\n*[ ]{0,3}[^ \t\n]|(?=~0))    // attacklab: g_tab_width<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1077

><td class="source">            /g ,function(){...});<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1078

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1079

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1080

    ><td class="source">            // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1081

    ><td class="source">            text += &quot;~0&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1082

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1083

    ><td class="source">            text = text.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1084

    ><td class="source">                function (wholeMatch, m1, m2) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1085

        ><td class="source">                    var codeblock = m1;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1086

        ><td class="source">                    var nextChar = m2;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1087

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1088

        ><td class="source">                    codeblock = _EncodeCode(_Outdent(codeblock));<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1089

        ><td class="source">                    codeblock = _Detab(codeblock);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1090

        ><td class="source">                    codeblock = codeblock.replace(/^\n+/g, &quot;&quot;); // trim leading newlines<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1091

        ><td class="source">                    codeblock = codeblock.replace(/\n+$/g, &quot;&quot;); // trim trailing whitespace<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1092

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1093

        ><td class="source">                    codeblock = &quot;&lt;pre&gt;&lt;code&gt;&quot; + codeblock + &quot;\n&lt;/code&gt;&lt;/pre&gt;&quot;;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1094

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1095

        ><td class="source">                    return &quot;\n\n&quot; + codeblock + &quot;\n\n&quot; + nextChar;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1096

        ><td class="source">                }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1097

    ><td class="source">            );<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1098

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1099

    ><td class="source">            // attacklab: strip sentinel<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1100

    ><td class="source">            text = text.replace(/~0/, &quot;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1101

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1102

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1103

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1104

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1105

><td class="source">        function _DoCodeSpans(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1106

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1107

    ><td class="source">            // * Backtick quotes are used for &lt;code&gt;&lt;/code&gt; spans.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1108

    ><td class="source">            // <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1109

    ><td class="source">            // * You can use multiple backticks as the delimiters if you want to<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1110

    ><td class="source">            //   include literal backticks in the code span. So, this input:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1111

    ><td class="source">            //     <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1112

    ><td class="source">            //      Just type ``foo `bar` baz`` at the prompt.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1113

    ><td class="source">            //     <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1114

    ><td class="source">            //   Will translate to:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1115

    ><td class="source">            //     <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1116

    ><td class="source">            //      &lt;p&gt;Just type &lt;code&gt;foo `bar` baz&lt;/code&gt; at the prompt.&lt;/p&gt;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1117

    ><td class="source">            //     <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1118

    ><td class="source">            //   There&#39;s no arbitrary limit to the number of backticks you<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1119

    ><td class="source">            //   can use as delimters. If you need three consecutive backticks<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1120

    ><td class="source">            //   in your code, use four for delimiters, etc.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1121

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1122

    ><td class="source">            // * You can use spaces to get literal backticks at the edges:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1123

    ><td class="source">            //     <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1124

    ><td class="source">            //      ... type `` `bar` `` ...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1125

    ><td class="source">            //     <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1126

    ><td class="source">            //   Turns to:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1127

    ><td class="source">            //     <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1128

    ><td class="source">            //      ... type &lt;code&gt;`bar`&lt;/code&gt; ...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1129

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1130

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1131

    ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1132

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1133

><td class="source">                (^|[^\\`])      // Character before opening ` can&#39;t be a backslash or backtick<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1134

><td class="source">                (`+)            // $2 = Opening run of `<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1135

><td class="source">                (?!`)           // and no more backticks -- match the full run<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1136

><td class="source">                (               // $3 = The code block<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1137

><td class="source">                    [^\r]*?<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1138

><td class="source">                    [^`]        // attacklab: work around lack of lookbehind<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1139

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1140

><td class="source">                \2              // Matching closer<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1141

><td class="source">                (?!`)<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1142

><td class="source">            /gm, function(){...});<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1143

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1144

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1145

    ><td class="source">            text = text.replace(/(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1146

    ><td class="source">                function (wholeMatch, m1, m2, m3, m4) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1147

        ><td class="source">                    var c = m3;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1148

        ><td class="source">                    c = c.replace(/^([ \t]*)/g, &quot;&quot;); // leading whitespace<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1149

        ><td class="source">                    c = c.replace(/[ \t]*$/g, &quot;&quot;); // trailing whitespace<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1150

        ><td class="source">                    c = _EncodeCode(c);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1151

        ><td class="source">                    c = c.replace(/:\/\//g, &quot;~P&quot;); // to prevent auto-linking. Not necessary in code *blocks*, but in code spans. Will be converted back after the auto-linker runs.<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1152

        ><td class="source">                    return m1 + &quot;&lt;code&gt;&quot; + c + &quot;&lt;/code&gt;&quot;;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1153

        ><td class="source">                }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1154

    ><td class="source">            );<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1155

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1156

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1157

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1158

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1159

><td class="source">        function _EncodeCode(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1160

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1161

    ><td class="source">            // Encode/escape certain characters inside Markdown code runs.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1162

    ><td class="source">            // The point is that in code, these characters are literals,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1163

    ><td class="source">            // and lose their special Markdown meanings.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1164

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1165

    ><td class="source">            // Encode all ampersands; HTML entities are not<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1166

    ><td class="source">            // entities within a Markdown code span.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1167

    ><td class="source">            text = text.replace(/&amp;/g, &quot;&amp;amp;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1168

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1169

    ><td class="source">            // Do the angle bracket song and dance:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1170

    ><td class="source">            text = text.replace(/&lt;/g, &quot;&amp;lt;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1171

    ><td class="source">            text = text.replace(/&gt;/g, &quot;&amp;gt;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1172

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1173

    ><td class="source">            // Now, escape characters that are magic in Markdown:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1174

    ><td class="source">            text = escapeCharacters(text, &quot;\*_{}[]\\&quot;, false);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1175

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1176

    ><td class="source">            // jj the line above breaks this:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1177

    ><td class="source">            //---<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1178

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1179

    ><td class="source">            //* Item<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1180

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1181

    ><td class="source">            //   1. Subitem<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1182

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1183

    ><td class="source">            //            special char: *<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1184

    ><td class="source">            //---<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1185

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1186

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1187

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1188

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1189

><td class="source">        function _DoItalicsAndBoldStrict(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1190

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1191

    ><td class="source">            if (text.indexOf(&quot;*&quot;) === -1 &amp;&amp; text.indexOf(&quot;_&quot;) === - 1)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1192

    ><td class="source">                return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1193

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1194

    ><td class="source">            text = asciify(text);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1195

    ><td class="source">        <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1196

    ><td class="source">            // &lt;strong&gt; must go first:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1197

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1198

    ><td class="source">            // (^|[\W_])           Start with a non-letter or beginning of string. Store in \1.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1199

    ><td class="source">            // (?:(?!\1)|(?=^))    Either the next character is *not* the same as the previous,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1200

    ><td class="source">            //                     or we started at the end of the string (in which case the previous<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1201

    ><td class="source">            //                     group had zero width, so we&#39;re still there). Because the next<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1202

    ><td class="source">            //                     character is the marker, this means that if there are e.g. multiple<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1203

    ><td class="source">            //                     underscores in a row, we can only match the left-most ones (which<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1204

    ><td class="source">            //                     prevents foo___bar__ from getting bolded)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1205

    ><td class="source">            // (\*|_)              The marker character itself, asterisk or underscore. Store in \2.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1206

    ><td class="source">            // \2                  The marker again, since bold needs two.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1207

    ><td class="source">            // (?=\S)              The first bolded character cannot be a space.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1208

    ><td class="source">            // ([^\r]*?\S)         The actual bolded string. At least one character, and it cannot *end*<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1209

    ><td class="source">            //                     with a space either. Note that like in many other places, [^\r] is<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1210

    ><td class="source">            //                     just a workaround for JS&#39; lack of single-line regexes; it&#39;s equivalent<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1211

    ><td class="source">            //                     to a . in an /s regex, because the string cannot contain any \r (they<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1212

    ><td class="source">            //                     are removed in the normalizing step).<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1213

    ><td class="source">            // \2\2                The marker character, twice -- end of bold.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1214

    ><td class="source">            // (?!\2)              Not followed by another marker character (ensuring that we match the<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1215

    ><td class="source">            //                     rightmost two in a longer row)...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1216

    ><td class="source">            // (?=[\W_]|$)         ...but by any other non-word character or the end of string.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1217

    ><td class="source">            text = text.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1218

    ><td class="source">            &quot;$1&lt;strong&gt;$3&lt;/strong&gt;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1219

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1220

    ><td class="source">            // This is almost identical to the &lt;strong&gt; regex, except 1) there&#39;s obviously just one marker<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1221

    ><td class="source">            // character, and 2) the italicized string cannot contain the marker character.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1222

    ><td class="source">            text = text.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1223

    ><td class="source">            &quot;$1&lt;em&gt;$3&lt;/em&gt;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1224

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1225

    ><td class="source">            return deasciify(text);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1226

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1227

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1228

><td class="source">        function _DoItalicsAndBold_AllowIntrawordWithAsterisk(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1229

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1230

    ><td class="source">            if (text.indexOf(&quot;*&quot;) === -1 &amp;&amp; text.indexOf(&quot;_&quot;) === - 1)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1231

    ><td class="source">                return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1232

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1233

    ><td class="source">            text = asciify(text);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1234

    ><td class="source">        <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1235

    ><td class="source">            // &lt;strong&gt; must go first:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1236

    ><td class="source">            // (?=[^\r][*_]|[*_])               Optimization only, to find potentially relevant text portions faster. Minimally slower in Chrome, but much faster in IE.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1237

    ><td class="source">            // (                                Store in \1. This is the last character before the delimiter<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1238

    ><td class="source">            //     ^                            Either we&#39;re at the start of the string (i.e. there is no last character)...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1239

    ><td class="source">            //     |                            ... or we allow one of the following:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1240

    ><td class="source">            //     (?=                          (lookahead; we&#39;re not capturing this, just listing legal possibilities)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1241

    ><td class="source">            //         \W__                     If the delimiter is __, then this last character must be non-word non-underscore (extra-word emphasis only)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1242

    ><td class="source">            //         |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1243

    ><td class="source">            //         (?!\*)[\W_]\*\*          If the delimiter is **, then this last character can be non-word non-asterisk (extra-word emphasis)...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1244

    ><td class="source">            //         |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1245

    ><td class="source">            //         \w\*\*\w                 ...or it can be word/underscore, but only if the first bolded character is such a character as well (intra-word emphasis)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1246

    ><td class="source">            //     )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1247

    ><td class="source">            //     [^\r]                        actually capture the character (can&#39;t use `.` since it could be \n)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1248

    ><td class="source">            // )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1249

    ><td class="source">            // (\*\*|__)                        Store in \2: the actual delimiter<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1250

    ><td class="source">            // (?!\2)                           not followed by the delimiter again (at most one more asterisk/underscore is allowed)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1251

    ><td class="source">            // (?=\S)                           the first bolded character can&#39;t be a space<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1252

    ><td class="source">            // (                                Store in \3: the bolded string<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1253

    ><td class="source">            //                                  <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1254

    ><td class="source">            //     (?:|                         Look at all bolded characters except for the last one. Either that&#39;s empty, meaning only a single character was bolded...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1255

    ><td class="source">            //       [^\r]*?                    ... otherwise take arbitrary characters, minimally matching; that&#39;s all bolded characters except for the last *two*<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1256

    ><td class="source">            //       (?!\2)                       the last two characters cannot be the delimiter itself (because that would mean four underscores/asterisks in a row)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1257

    ><td class="source">            //       [^\r]                        capture the next-to-last bolded character<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1258

    ><td class="source">            //     )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1259

    ><td class="source">            //     (?=                          lookahead at the very last bolded char and what comes after<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1260

    ><td class="source">            //         \S_                      for underscore-bolding, it can be any non-space<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1261

    ><td class="source">            //         |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1262

    ><td class="source">            //         \w                       for asterisk-bolding (otherwise the previous alternative would&#39;ve matched, since \w implies \S), either the last char is word/underscore...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1263

    ><td class="source">            //         |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1264

    ><td class="source">            //         \S\*\*(?:[\W_]|$)        ... or it&#39;s any other non-space, but in that case the character *after* the delimiter may not be a word character<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1265

    ><td class="source">            //     )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1266

    ><td class="source">            //     .                            actually capture the last character (can use `.` this time because the lookahead ensures \S in all cases)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1267

    ><td class="source">            // )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1268

    ><td class="source">            // (?=                              lookahead; list the legal possibilities for the closing delimiter and its following character<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1269

    ><td class="source">            //     __(?:\W|$)                   for underscore-bolding, the following character (if any) must be non-word non-underscore<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1270

    ><td class="source">            //     |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1271

    ><td class="source">            //     \*\*(?:[^*]|$)               for asterisk-bolding, any non-asterisk is allowed (note we already ensured above that it&#39;s not a word character if the last bolded character wasn&#39;t one)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1272

    ><td class="source">            // )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1273

    ><td class="source">            // \2                               actually capture the closing delimiter (and make sure that it matches the opening one)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1274

    ><td class="source">          <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1275

    ><td class="source">            text = text.replace(/(?=[^\r][*_]|[*_])(^|(?=\W__|(?!\*)[\W_]\*\*|\w\*\*\w)[^\r])(\*\*|__)(?!\2)(?=\S)((?:|[^\r]*?(?!\2)[^\r])(?=\S_|\w|\S\*\*(?:[\W_]|$)).)(?=__(?:\W|$)|\*\*(?:[^*]|$))\2/g,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1276

    ><td class="source">            &quot;$1&lt;strong&gt;$3&lt;/strong&gt;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1277

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1278

    ><td class="source">            // now &lt;em&gt;:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1279

    ><td class="source">            // (?=[^\r][*_]|[*_])               Optimization, see above.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1280

    ><td class="source">            // (                                Store in \1. This is the last character before the delimiter<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1281

    ><td class="source">            //     ^                            Either we&#39;re at the start of the string (i.e. there is no last character)...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1282

    ><td class="source">            //     |                            ... or we allow one of the following:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1283

    ><td class="source">            //     (?=                          (lookahead; we&#39;re not capturing this, just listing legal possibilities)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1284

    ><td class="source">            //         \W_                      If the delimiter is _, then this last character must be non-word non-underscore (extra-word emphasis only)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1285

    ><td class="source">            //         |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1286

    ><td class="source">            //         (?!\*)                   otherwise, we list two possiblities for * as the delimiter; in either case, the last characters cannot be an asterisk itself<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1287

    ><td class="source">            //         (?:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1288

    ><td class="source">            //             [\W_]\*              this last character can be non-word (extra-word emphasis)...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1289

    ><td class="source">            //             |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1290

    ><td class="source">            //             \D\*(?=\w)\D         ...or it can be word (otherwise the first alternative would&#39;ve matched), but only if<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1291

    ><td class="source">            //                                      a) the first italicized character is such a character as well (intra-word emphasis), and<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1292

    ><td class="source">            //                                      b) neither character on either side of the asterisk is a digit            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1293

    ><td class="source">            //         )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1294

    ><td class="source">            //     )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1295

    ><td class="source">            //     [^\r]                        actually capture the character (can&#39;t use `.` since it could be \n)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1296

    ><td class="source">            // )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1297

    ><td class="source">            // (\*|_)                           Store in \2: the actual delimiter<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1298

    ><td class="source">            // (?!\2\2\2)                       not followed by more than two more instances of the delimiter<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1299

    ><td class="source">            // (?=\S)                           the first italicized character can&#39;t be a space<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1300

    ><td class="source">            // (                                Store in \3: the italicized string<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1301

    ><td class="source">            //     (?:(?!\2)[^\r])*?            arbitrary characters except for the delimiter itself, minimally matching<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1302

    ><td class="source">            //     (?=                          lookahead at the very last italicized char and what comes after<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1303

    ><td class="source">            //         [^\s_]_                  for underscore-italicizing, it can be any non-space non-underscore<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1304

    ><td class="source">            //         |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1305

    ><td class="source">            //         (?=\w)\D\*\D             for asterisk-italicizing, either the last char is word/underscore *and* neither character on either side of the asterisk is a digit...<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1306

    ><td class="source">            //         |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1307

    ><td class="source">            //         [^\s*]\*(?:[\W_]|$)      ... or that last char is any other non-space non-asterisk, but then the character after the delimiter (if any) must be non-word<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1308

    ><td class="source">            //     )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1309

    ><td class="source">            //     .                            actually capture the last character (can use `.` this time because the lookahead ensures \S in all cases)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1310

    ><td class="source">            // )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1311

    ><td class="source">            // (?=                              lookahead; list the legal possibilities for the closing delimiter and its following character<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1312

    ><td class="source">            //     _(?:\W|$)                    for underscore-italicizing, the following character (if any) must be non-word non-underscore<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1313

    ><td class="source">            //     |<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1314

    ><td class="source">            //     \*(?:[^*]|$)                 for asterisk-italicizing, any non-asterisk is allowed; all other restrictions have already been ensured in the previous lookahead<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1315

    ><td class="source">            // )<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1316

    ><td class="source">            // \2                               actually capture the closing delimiter (and make sure that it matches the opening one)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1317

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1318

    ><td class="source">            text = text.replace(/(?=[^\r][*_]|[*_])(^|(?=\W_|(?!\*)(?:[\W_]\*|\D\*(?=\w)\D))[^\r])(\*|_)(?!\2\2\2)(?=\S)((?:(?!\2)[^\r])*?(?=[^\s_]_|(?=\w)\D\*\D|[^\s*]\*(?:[\W_]|$)).)(?=_(?:\W|$)|\*(?:[^*]|$))\2/g,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1319

    ><td class="source">            &quot;$1&lt;em&gt;$3&lt;/em&gt;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1320

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1321

    ><td class="source">            return deasciify(text);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1322

    ><td class="source">        }        <br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1323

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1324

><td class="source">        <br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1325

><td class="source">        function _DoBlockQuotes(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1326

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1327

    ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1328

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1329

><td class="source">                (                           // Wrap whole match in $1<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1330

><td class="source">                    (<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1331

><td class="source">                        ^[ \t]*&gt;[ \t]?      // &#39;&gt;&#39; at the start of a line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1332

><td class="source">                        .+\n                // rest of the first line<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1333

><td class="source">                        (.+\n)*             // subsequent consecutive lines<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1334

><td class="source">                        \n*                 // blanks<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1335

><td class="source">                    )+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1336

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1337

><td class="source">            /gm, function(){...});<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1338

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1339

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1340

    ><td class="source">            text = text.replace(/((^[ \t]*&gt;[ \t]?.+\n(.+\n)*\n*)+)/gm,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1341

    ><td class="source">                function (wholeMatch, m1) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1342

        ><td class="source">                    var bq = m1;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1343

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1344

        ><td class="source">                    // attacklab: hack around Konqueror 3.5.4 bug:<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1345

        ><td class="source">                    // &quot;----------bug&quot;.replace(/^-/g,&quot;&quot;) == &quot;bug&quot;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1346

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1347

        ><td class="source">                    bq = bq.replace(/^[ \t]*&gt;[ \t]?/gm, &quot;~0&quot;); // trim one level of quoting<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1348

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1349

        ><td class="source">                    // attacklab: clean up hack<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1350

        ><td class="source">                    bq = bq.replace(/~0/g, &quot;&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1351

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1352

        ><td class="source">                    bq = bq.replace(/^[ \t]+$/gm, &quot;&quot;);     // trim whitespace-only lines<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1353

        ><td class="source">                    bq = _RunBlockGamut(bq);             // recurse<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1354

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1355

        ><td class="source">                    bq = bq.replace(/(^|\n)/g, &quot;$1  &quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1356

        ><td class="source">                    // These leading spaces screw with &lt;pre&gt; content, so we need to fix that:<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1357

        ><td class="source">                    bq = bq.replace(<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1358

        ><td class="source">                            /(\s*&lt;pre&gt;[^\r]+?&lt;\/pre&gt;)/gm,<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1359

        ><td class="source">                        function (wholeMatch, m1) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1360

            ><td class="source">                            var pre = m1;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1361

            ><td class="source">                            // attacklab: hack around Konqueror 3.5.4 bug:<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1362

            ><td class="source">                            pre = pre.replace(/^  /mg, &quot;~0&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1363

            ><td class="source">                            pre = pre.replace(/~0/g, &quot;&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1364

            ><td class="source">                            return pre;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1365

            ><td class="source">                        });<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1366

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1367

        ><td class="source">                    return hashBlock(&quot;&lt;blockquote&gt;\n&quot; + bq + &quot;\n&lt;/blockquote&gt;&quot;);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1368

        ><td class="source">                }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1369

    ><td class="source">            );<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1370

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1371

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1372

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1373

><td class="source">        function _FormParagraphs(text, doNotUnhash) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1374

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1375

    ><td class="source">            //  Params:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1376

    ><td class="source">            //    $text - string to process with html &lt;p&gt; tags<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1377

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1378

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1379

    ><td class="source">            // Strip leading and trailing lines:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1380

    ><td class="source">            text = text.replace(/^\n+/g, &quot;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1381

    ><td class="source">            text = text.replace(/\n+$/g, &quot;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1382

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1383

    ><td class="source">            var grafs = text.split(/\n{2,}/g);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1384

    ><td class="source">            var grafsOut = [];<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1385

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1386

    ><td class="source">            var markerRe = /~K(\d+)K/;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1387

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1388

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1389

    ><td class="source">            // Wrap &lt;p&gt; tags.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1390

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1391

    ><td class="source">            var end = grafs.length;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1392

    ><td class="source">            for (var i = 0; i &lt; end; i++) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1393

        ><td class="source">                var str = grafs[i];<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1394

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1395

        ><td class="source">                // if this is an HTML marker, copy it<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1396

        ><td class="source">                if (markerRe.test(str)) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1397

            ><td class="source">                    grafsOut.push(str);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1398

            ><td class="source">                }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1399

        ><td class="source">                else if (/\S/.test(str)) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1400

            ><td class="source">                    str = _RunSpanGamut(str);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1401

            ><td class="source">                    str = str.replace(/^([ \t]*)/g, &quot;&lt;p&gt;&quot;);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1402

            ><td class="source">                    str += &quot;&lt;/p&gt;&quot;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1403

            ><td class="source">                    grafsOut.push(str);<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1404

            ><td class="source">                }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1405

        ><td class="source"><br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1406

        ><td class="source">            }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1407

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1408

    ><td class="source">            // Unhashify HTML blocks<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1409

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1410

    ><td class="source">            if (!doNotUnhash) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1411

        ><td class="source">                end = grafsOut.length;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1412

        ><td class="source">                for (var i = 0; i &lt; end; i++) {<br></td></tr
        ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1413

            ><td class="source">                    var foundAny = true;<br></td></tr
            ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1414

            ><td class="source">                    while (foundAny) { // we may need several runs, since the data may be nested<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1415

                ><td class="source">                        foundAny = false;<br></td></tr
                ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1416

                ><td class="source">                        grafsOut[i] = grafsOut[i].replace(/~K(\d+)K/g, function (wholeMatch, id) {<br></td></tr
                ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1417

                    ><td class="source">                            foundAny = true;<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1418

                    ><td class="source">                            return g_html_blocks[id];<br></td></tr
                    ><tr
                    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1419

                    ><td class="source">                        });<br></td></tr
                    ><tr
                id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1420

                ><td class="source">                    }<br></td></tr
                ><tr
            id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1421

            ><td class="source">                }<br></td></tr
            ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1422

        ><td class="source">            }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1423

    ><td class="source">            return grafsOut.join(&quot;\n\n&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1424

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1425

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1426

><td class="source">        function _EncodeAmpsAndAngles(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1427

    ><td class="source">            // Smart processing for ampersands and angle brackets that need to be encoded.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1428

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1429

    ><td class="source">            // Ampersand-encoding based entirely on Nat Irons&#39;s Amputator MT plugin:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1430

    ><td class="source">            //   http://bumppo.net/projects/amputator/<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1431

    ><td class="source">            text = text.replace(/&amp;(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, &quot;&amp;amp;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1432

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1433

    ><td class="source">            // Encode naked &lt;&#39;s<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1434

    ><td class="source">            text = text.replace(/&lt;(?![a-z\/?!]|~D)/gi, &quot;&amp;lt;&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1435

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1436

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1437

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1438

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1439

><td class="source">        function _EncodeBackslashEscapes(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1440

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1441

    ><td class="source">            //   Parameter:  String.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1442

    ><td class="source">            //   Returns:    The string, with after processing the following backslash<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1443

    ><td class="source">            //               escape sequences.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1444

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1445

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1446

    ><td class="source">            // attacklab: The polite way to do this is with the new<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1447

    ><td class="source">            // escapeCharacters() function:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1448

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1449

    ><td class="source">            //     text = escapeCharacters(text,&quot;\\&quot;,true);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1450

    ><td class="source">            //     text = escapeCharacters(text,&quot;`*_{}[]()&gt;#+-.!&quot;,true);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1451

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1452

    ><td class="source">            // ...but we&#39;re sidestepping its use of the (slow) RegExp constructor<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1453

    ><td class="source">            // as an optimization for Firefox.  This function gets called a LOT.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1454

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1455

    ><td class="source">            text = text.replace(/\\(\\)/g, escapeCharacters_callback);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1456

    ><td class="source">            text = text.replace(/\\([`*_{}\[\]()&gt;#+-.!])/g, escapeCharacters_callback);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1457

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1458

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1459

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1460

><td class="source">        var charInsideUrl = &quot;[-A-Z0-9+&amp;@#/%?=~_|[\\]()!:,.;]&quot;,<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1461

><td class="source">            charEndingUrl = &quot;[-A-Z0-9+&amp;@#/%=~_|[\\])]&quot;,<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1462

><td class="source">            autoLinkRegex = new RegExp(&quot;(=\&quot;|&lt;)?\\b(https?|ftp)(://&quot; + charInsideUrl + &quot;*&quot; + charEndingUrl + &quot;)(?=$|\\W)&quot;, &quot;gi&quot;),<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1463

><td class="source">            endCharRegex = new RegExp(charEndingUrl, &quot;i&quot;);<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1464

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1465

><td class="source">        function handleTrailingParens(wholeMatch, lookbehind, protocol, link) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1466

    ><td class="source">            if (lookbehind)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1467

    ><td class="source">                return wholeMatch;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1468

    ><td class="source">            if (link.charAt(link.length - 1) !== &quot;)&quot;)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1469

    ><td class="source">                return &quot;&lt;&quot; + protocol + link + &quot;&gt;&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1470

    ><td class="source">            var parens = link.match(/[()]/g);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1471

    ><td class="source">            var level = 0;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1472

    ><td class="source">            for (var i = 0; i &lt; parens.length; i++) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1473

        ><td class="source">                if (parens[i] === &quot;(&quot;) {<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1474

        ><td class="source">                    if (level &lt;= 0)<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1475

        ><td class="source">                        level = 1;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1476

        ><td class="source">                    else<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1477

        ><td class="source">                        level++;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1478

        ><td class="source">                }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1479

    ><td class="source">                else {<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1480

    ><td class="source">                    level--;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1481

    ><td class="source">                }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1482

><td class="source">            }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1483

><td class="source">            var tail = &quot;&quot;;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1484

><td class="source">            if (level &lt; 0) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1485

    ><td class="source">                var re = new RegExp(&quot;\\){1,&quot; + (-level) + &quot;}$&quot;);<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1486

><td class="source">                link = link.replace(re, function (trailingParens) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1487

    ><td class="source">                    tail = trailingParens;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1488

    ><td class="source">                    return &quot;&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1489

    ><td class="source">                });<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1490

><td class="source">            }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1491

><td class="source">            if (tail) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1492

    ><td class="source">                var lastChar = link.charAt(link.length - 1);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1493

    ><td class="source">                if (!endCharRegex.test(lastChar)) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1494

        ><td class="source">                    tail = lastChar + tail;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1495

        ><td class="source">                    link = link.substr(0, link.length - 1);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1496

        ><td class="source">                }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1497

    ><td class="source">            }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1498

><td class="source">            return &quot;&lt;&quot; + protocol + link + &quot;&gt;&quot; + tail;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1499

><td class="source">        }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1500

><td class="source">        <br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1501

><td class="source">        function _DoAutoLinks(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1502

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1503

    ><td class="source">            // note that at this point, all other URL in the text are already hyperlinked as &lt;a href=&quot;&quot;&gt;&lt;/a&gt;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1504

    ><td class="source">            // *except* for the &lt;http://www.foo.com&gt; case<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1505

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1506

    ><td class="source">            // automatically add &lt; and &gt; around unadorned raw hyperlinks<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1507

    ><td class="source">            // must be preceded by a non-word character (and not by =&quot; or &lt;) and followed by non-word/EOF character<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1508

    ><td class="source">            // simulating the lookbehind in a consuming way is okay here, since a URL can neither and with a &quot; nor<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1509

    ><td class="source">            // with a &lt;, so there is no risk of overlapping matches.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1510

    ><td class="source">            text = text.replace(autoLinkRegex, handleTrailingParens);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1511

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1512

    ><td class="source">            //  autolink anything like &lt;http://example.com&gt;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1513

    ><td class="source">            <br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1514

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1515

    ><td class="source">            var replacer = function (wholematch, m1) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1516

        ><td class="source">                var url = attributeSafeUrl(m1);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1517

        ><td class="source">                <br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1518

        ><td class="source">                return &quot;&lt;a href=\&quot;&quot; + url + &quot;\&quot;&gt;&quot; + pluginHooks.plainLinkText(m1) + &quot;&lt;/a&gt;&quot;;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1519

        ><td class="source">            };<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1520

    ><td class="source">            text = text.replace(/&lt;((https?|ftp):[^&#39;&quot;&gt;\s]+)&gt;/gi, replacer);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1521

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1522

    ><td class="source">            // Email addresses: &lt;address@domain.foo&gt;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1523

    ><td class="source">            /*<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1524

><td class="source">            text = text.replace(/<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1525

><td class="source">                &lt;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1526

><td class="source">                (?:mailto:)?<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1527

><td class="source">                (<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1528

><td class="source">                    [-.\w]+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1529

><td class="source">                    \@<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1530

><td class="source">                    [-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1531

><td class="source">                )<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1532

><td class="source">                &gt;<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1533

><td class="source">            /gi, _DoAutoLinks_callback());<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1534

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1535

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1536

    ><td class="source">            /* disabling email autolinking, since we don&#39;t do that on the server, either<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1537

><td class="source">            text = text.replace(/&lt;(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)&gt;/gi,<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1538

><td class="source">                function(wholeMatch,m1) {<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1539

><td class="source">                    return _EncodeEmailAddress( _UnescapeSpecialChars(m1) );<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1540

><td class="source">                }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1541

><td class="source">            );<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1542

><td class="source">            */<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1543

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1544

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1545

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1546

><td class="source">        function _UnescapeSpecialChars(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1547

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1548

    ><td class="source">            // Swap back in all the special characters we&#39;ve hidden.<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1549

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1550

    ><td class="source">            text = text.replace(/~E(\d+)E/g,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1551

    ><td class="source">                function (wholeMatch, m1) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1552

        ><td class="source">                    var charCodeToReplace = parseInt(m1);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1553

        ><td class="source">                    return String.fromCharCode(charCodeToReplace);<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1554

        ><td class="source">                }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1555

    ><td class="source">            );<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1556

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1557

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1558

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1559

><td class="source">        function _Outdent(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1560

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1561

    ><td class="source">            // Remove one level of line-leading tabs or spaces<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1562

    ><td class="source">            //<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1563

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1564

    ><td class="source">            // attacklab: hack around Konqueror 3.5.4 bug:<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1565

    ><td class="source">            // &quot;----------bug&quot;.replace(/^-/g,&quot;&quot;) == &quot;bug&quot;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1566

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1567

    ><td class="source">            text = text.replace(/^(\t|[ ]{1,4})/gm, &quot;~0&quot;); // attacklab: g_tab_width<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1568

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1569

    ><td class="source">            // attacklab: clean up hack<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1570

    ><td class="source">            text = text.replace(/~0/g, &quot;&quot;)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1571

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1572

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1573

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1574

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1575

><td class="source">        function _Detab(text) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1576

    ><td class="source">            if (!/\t/.test(text))<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1577

    ><td class="source">                return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1578

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1579

    ><td class="source">            var spaces = [&quot;    &quot;, &quot;   &quot;, &quot;  &quot;, &quot; &quot;],<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1580

    ><td class="source">            skew = 0,<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1581

    ><td class="source">            v;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1582

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1583

    ><td class="source">            return text.replace(/[\n\t]/g, function (match, offset) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1584

        ><td class="source">                if (match === &quot;\n&quot;) {<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1585

        ><td class="source">                    skew = offset + 1;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1586

        ><td class="source">                    return match;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1587

        ><td class="source">                }<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1588

    ><td class="source">                v = (offset - skew) % 4;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1589

    ><td class="source">                skew = offset + 1;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1590

    ><td class="source">                return spaces[v];<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1591

    ><td class="source">            });<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1592

><td class="source">        }<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1593

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1594

><td class="source">        //<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1595

><td class="source">        //  attacklab: Utility functions<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1596

><td class="source">        //<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1597

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1598

><td class="source">        function attributeSafeUrl(url) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1599

    ><td class="source">            url = attributeEncode(url);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1600

    ><td class="source">            url = escapeCharacters(url, &quot;*_:()[]&quot;)<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1601

    ><td class="source">            return url;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1602

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1603

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1604

><td class="source">        function escapeCharacters(text, charsToEscape, afterBackslash) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1605

    ><td class="source">            // First we have to escape the escape characters so that<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1606

    ><td class="source">            // we can build a character class out of them<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1607

    ><td class="source">            var regexString = &quot;([&quot; + charsToEscape.replace(/([\[\]\\])/g, &quot;\\$1&quot;) + &quot;])&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1608

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1609

    ><td class="source">            if (afterBackslash) {<br></td></tr
    ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1610

        ><td class="source">                regexString = &quot;\\\\&quot; + regexString;<br></td></tr
        ><tr
        id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1611

        ><td class="source">            }<br></td></tr
        ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1612

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1613

    ><td class="source">            var regex = new RegExp(regexString, &quot;g&quot;);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1614

    ><td class="source">            text = text.replace(regex, escapeCharacters_callback);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1615

    ><td class="source"><br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1616

    ><td class="source">            return text;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1617

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1618

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1619

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1620

><td class="source">        function escapeCharacters_callback(wholeMatch, m1) {<br></td></tr
><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1621

    ><td class="source">            var charCodeToEscape = m1.charCodeAt(0);<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1622

    ><td class="source">            return &quot;~E&quot; + charCodeToEscape + &quot;E&quot;;<br></td></tr
    ><tr
    id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1623

    ><td class="source">        }<br></td></tr
    ><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1624

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1625

><td class="source">    }; // end of the Markdown.Converter constructor<br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1626

><td class="source"><br></td></tr
><tr
id=sl_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_1627

><td class="source">})();<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
function gutterOver(num) {
    gutterOut();
    var newTR = document.getElementById('gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_' + num);
    if (newTR) {
        newTR.className = 'undermouse';
    }
    lineNumUnderMouse = num;
}
function gutterOut() {
    if (lineNumUnderMouse != -1) {
        var oldTR = document.getElementById(
        'gr_svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b_' + lineNumUnderMouse);
        if (oldTR) {
            oldTR.className = '';
        }
        lineNumUnderMouse = -1;
    }
}
var numsGenState = {table_base_id: 'nums_table_'};
var srcGenState = {table_base_id: 'src_table_'};
var alignerRunning = false;
var startOver = false;
function setLineNumberHeights() {
    if (alignerRunning) {
        startOver = true;
        return;
    }
    numsGenState.chunk_id = 0;
    numsGenState.table = document.getElementById('nums_table_0');
    numsGenState.row_num = 0;
    if (!numsGenState.table) {
        return; // Silently exit if no file is present.
    }
    srcGenState.chunk_id = 0;
    srcGenState.table = document.getElementById('src_table_0');
    srcGenState.row_num = 0;
    alignerRunning = true;
    continueToSetLineNumberHeights();
}
function rowGenerator(genState) {
    if (genState.row_num < genState.table.rows.length) {
        var currentRow = genState.table.rows[genState.row_num];
        genState.row_num++;
        return currentRow;
    }
    var newTable = document.getElementById(
    genState.table_base_id + (genState.chunk_id + 1));
    if (newTable) {
        genState.chunk_id++;
        genState.row_num = 0;
        genState.table = newTable;
        return genState.table.rows[0];
    }
    return null;
}
var MAX_ROWS_PER_PASS = 1000;
function continueToSetLineNumberHeights() {
    var rowsInThisPass = 0;
    var numRow = 1;
    var srcRow = 1;
    while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
        numRow = rowGenerator(numsGenState);
        srcRow = rowGenerator(srcGenState);
        rowsInThisPass++;
        if (numRow && srcRow) {
            if (numRow.offsetHeight != srcRow.offsetHeight) {
                numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
            }
        }
    }
    if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
        setTimeout(continueToSetLineNumberHeights, 10);
    } else {
        alignerRunning = false;
        if (startOver) {
            startOver = false;
            setTimeout(setLineNumberHeights, 500);
        }
    }
}
function initLineNumberHeights() {
    // Do 2 complete passes, because there can be races
    // between this code and prettify.
    startOver = true;
    setTimeout(setLineNumberHeights, 250);
    window.onresize = setLineNumberHeights;
}
initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/pagedown/source/detail?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&amp;r=2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b">2a8c75ce3fb5</a>
by balpha
on Oct 10, 2014
&nbsp; <a href="/p/pagedown/source/diff?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&r=2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&amp;format=side&amp;path=/Markdown.Converter.js&amp;old_path=/Markdown.Converter.js&amp;old=50c01599393cc141ba2ccbf985eb8fd522cb1825">Diff</a>
</div>
<pre>optimization</pre>
</div>
 
 
 
 
 
 
<script type="text/javascript">
var detail_url = '/p/pagedown/source/detail?r=2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b';
var publish_url = '/p/pagedown/source/detail?r=2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b#publish';
// describe the paths of this revision in javascript.
var changed_paths = [];
var changed_urls = [];
 
changed_paths.push('/Markdown.Converter.js');
changed_urls.push('/p/pagedown/source/browse/Markdown.Converter.js?r\x3d2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b\x26spec\x3dsvn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b');
 
var selected_path = '/Markdown.Converter.js';
 
 
function getCurrentPageIndex() {
    for (var i = 0; i < changed_paths.length; i++) {
        if (selected_path == changed_paths[i]) {
            return i;
        }
    }
}
function getNextPage() {
    var i = getCurrentPageIndex();
    if (i < changed_paths.length - 1) {
        return changed_urls[i + 1];
    }
    return null;
}
function getPreviousPage() {
    var i = getCurrentPageIndex();
    if (i > 0) {
        return changed_urls[i - 1];
    }
    return null;
}
function gotoNextPage() {
    var page = getNextPage();
    if (!page) {
        page = detail_url;
    }
    window.location = page;
}
function gotoPreviousPage() {
    var page = getPreviousPage();
    if (!page) {
        page = detail_url;
    }
    window.location = page;
}
function gotoDetailPage() {
    window.location = detail_url;
}
function gotoPublishPage() {
    window.location = publish_url;
}
</script>

 
 <style type="text/css">
 #review_nav {
     border-top: 3px solid white;
     padding-top: 6px;
     margin-top: 1em;
 }
 #review_nav td {
     vertical-align: middle;
 }
 #review_nav select {
    margin: .5em 0;
 }
</style>
<div id="review_nav">
<table><tr><td>Go to:&nbsp;</td><td>
<select name="files_in_rev" onchange="window.location=this.value">
 
<option value="/p/pagedown/source/browse/Markdown.Converter.js?r=2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&amp;spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b"
selected="selected"
>/Markdown.Converter.js</option>
 
</select>
</td></tr></table>
 
 
 



 
</div>
 
 
</div>
<div class="round1"></div>
<div class="round2"></div>
<div class="round4"></div>
</div>
<div class="pmeta_bubble_bg" style="border:1px solid white">
<div class="round4"></div>
<div class="round2"></div>
<div class="round1"></div>
<div class="box-inner">
<div id="older_bubble">
<p>Older revisions</p>
 
 
<div class="closed" style="margin-bottom:3px;" >
<a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
<a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
<a href="/p/pagedown/source/detail?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&r=50c01599393cc141ba2ccbf985eb8fd522cb1825">50c01599393c</a>
by balpha
on Oct 10, 2014
&nbsp; <a href="/p/pagedown/source/diff?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&r=50c01599393cc141ba2ccbf985eb8fd522cb1825&amp;format=side&amp;path=/Markdown.Converter.js&amp;old_path=/Markdown.Converter.js&amp;old=8e95798228eeeaf1222b342b0a8b81bf296bfdb5">Diff</a>
<br>
<pre class="ifOpened">optionally allow intra-word emphasis
with asterisks, and some smaller
bold/italic changes</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/pagedown/source/detail?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&r=8e95798228eeeaf1222b342b0a8b81bf296bfdb5">8e95798228ee</a>
by balpha
on Oct 9, 2014
&nbsp; <a href="/p/pagedown/source/diff?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&r=8e95798228eeeaf1222b342b0a8b81bf296bfdb5&amp;format=side&amp;path=/Markdown.Converter.js&amp;old_path=/Markdown.Converter.js&amp;old=016a78c093843e203de5364117d34d406a09e8c0">Diff</a>
<br>
<pre class="ifOpened">Allow creation of ordered lists that
start with numbers other than 1</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/pagedown/source/detail?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&r=016a78c093843e203de5364117d34d406a09e8c0">016a78c09384</a>
by balpha
on Oct 9, 2014
&nbsp; <a href="/p/pagedown/source/diff?spec=svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b&r=016a78c093843e203de5364117d34d406a09e8c0&amp;format=side&amp;path=/Markdown.Converter.js&amp;old_path=/Markdown.Converter.js&amp;old=f4ebd25329eceea528734639b21f74a4b1906996">Diff</a>
<br>
<pre class="ifOpened">Allow *[]$ in links. Good bye,
EncodeProblemUrlCharacters.</pre>
</div>
 
 
<a href="/p/pagedown/source/list?path=/Markdown.Converter.js&r=2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b">All revisions of this file</a>
</div>
</div>
<div class="round1"></div>
<div class="round2"></div>
<div class="round4"></div>
</div>
 
<div class="pmeta_bubble_bg" style="border:1px solid white">
<div class="round4"></div>
<div class="round2"></div>
<div class="round1"></div>
<div class="box-inner">
<div id="fileinfo_bubble">
<p>File info</p>
 
<div>Size: 75573 bytes,
1627 lines</div>
 
<div><a href="//pagedown.googlecode.com/hg/Markdown.Converter.js">View raw file</a></div>
</div>
 
</div>
<div class="round1"></div>
<div class="round2"></div>
<div class="round4"></div>
</div>
</div>
</div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
var initialized = false;
 
function updateCursor(next, prev) {
    if (prev && prev.element) {
        prev.element.className = 'cursor_stop cursor_hidden';
    }
    if (next && next.element) {
        next.element.className = 'cursor_stop cursor';
        lastStop = next.index;
    }
}
 
function pubRevealed(data) {
    updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
    if (initialized) {
        reloadCursors();
    }
}
 
function draftRevealed(data) {
    updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
    if (initialized) {
        reloadCursors();
    }
}
 
function draftDestroyed(data) {
    updateCursorForCell(data.cellId, 'nocursor');
    if (initialized) {
        reloadCursors();
    }
}
function reloadCursors() {
    kibbles.skipper.reset();
    loadCursors();
    if (lastStop != null) {
        kibbles.skipper.setCurrentStop(lastStop);
    }
}
// possibly the simplest way to insert any newly added comments
// is to update the class of the corresponding cursor row,
// then refresh the entire list of rows.
function updateCursorForCell(cellId, className) {
    var cell = document.getElementById(cellId);
    // we have to go two rows back to find the cursor location
    var row = getPreviousElement(cell.parentNode);
    row.className = className;
}
// returns the previous element, ignores text nodes.
function getPreviousElement(e) {
    var element = e.previousSibling;
    if (element.nodeType == 3) {
        element = element.previousSibling;
    }
    if (element && element.tagName) {
        return element;
    }
}
function loadCursors() {
    // register our elements with skipper
    var elements = CR_getElements('*', 'cursor_stop');
    var len = elements.length;
    for (var i = 0; i < len; i++) {
        var element = elements[i]; 
        element.className = 'cursor_stop cursor_hidden';
        kibbles.skipper.append(element);
    }
}
function toggleComments() {
    CR_toggleCommentDisplay();
    reloadCursors();
}
function keysOnLoadHandler() {
    // setup skipper
    kibbles.skipper.addStopListener(
    kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
    // Set the 'offset' option to return the middle of the client area
    // an option can be a static value, or a callback
    kibbles.skipper.setOption('padding_top', 50);
    // Set the 'offset' option to return the middle of the client area
    // an option can be a static value, or a callback
    kibbles.skipper.setOption('padding_bottom', 100);
    // Register our keys
    kibbles.skipper.addFwdKey("n");
    kibbles.skipper.addRevKey("p");
    kibbles.keys.addKeyPressListener(
    'u', function() { window.location = detail_url; });
    kibbles.keys.addKeyPressListener(
    'r', function() { window.location = detail_url + '#publish'; });
 
    kibbles.keys.addKeyPressListener('j', gotoNextPage);
    kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
}
</script>
<script src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
     var element = document.getElementById('review_instr');
     if (element) {
         element.className = 'opened';
     }
 }
var codereviews;
function revsOnLoadHandler() {
    // register our source container with the commenting code
    var paths = {'svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b': '/Markdown.Converter.js'}
    codereviews = CR_controller.setup(
    {"domainName": null, "projectHomeUrl": "/p/pagedown", "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "loggedInUserEmail": "GabuzaAV@gmail.com", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/10868592318973270098", "token": "ABZ6GAdtNuOZCqsBWbmtl4ehvIa0RnTmCg:1413754776821", "projectName": "pagedown", "profileUrl": "/u/114196812138739518903/"}, '', 'svn2a8c75ce3fb50b88165efae9d48a8bc87dc4fb2b', paths,
    CR_BrowseIntegrationFactory);
 
    codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
    codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
    codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
    codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
    var initialized = true;
    reloadCursors();
}
window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

