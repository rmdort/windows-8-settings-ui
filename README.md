## Windows 8 PC Settings

A simple windows 8 PC settings style packed in a jQuery plugin.

## Usage

### 1.Include jQuery and the plugin file

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script src="js/jquery.easytabs.js"></script>

*Add css from css/settings.css to your own css file*

### 2. Add the menu to your html

	<ul class="settingsMenu">
      <li class="active"><a href="#Personalize">Personalize</a></li>
      <li><a href="#Users">Users</a></li>
      <li><a href="#Notifications">Notifications</a></li>
      <li><a href="#Search">Search</a></li>
      <li><a href="#Share">Share</a></li>
      <li><a href="#General">General</a></li>
      <li><a href="#Privacy">Privacy</a></li>
      <li><a href="#Devices">Devices</a></li>
      <li><a href="#EaseOfAccess">Ease of Access</a></li>
      <li><a href="#SyncSettings">Sync your settings</a></li>
      <li><a href="#HomeGroup">Home Group</a></li>
      <li><a href="#WindowsUpdate">Windows Update</a></li>
    </ul>
    
### 3. Add the content for each tab

	<div class="settingsContent">
        <div id="Personalize" class="active">
          <h3>Personalize</h3>
          <p>Lorem ipsum dolor sit…</p>
        </div>
        <div id="Users" class="active">
          <h3>Users</h3>
          <p>Lorem ipsum dolor sit…</p>
        </div>
       	.. .. .. 
    </div>
    
### 4. Initialize Easy Tabs

	$(function(){
    	$('.settingsMenu').easyTabs();
	});