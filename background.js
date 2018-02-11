// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "Notification.requestPermission" beforehand).
*/

function show() {
  var n = new Notification("You Go Girl!", {
    icon: '48.png',
    body: "Don't give up, you got it!",
    requireInteraction: true
  });
}

  // Conditionally initialize the options.
  if (!localStorage.isInitialized) {
    localStorage.isActivated = true;   // The display activation. 
    localStorage.frequency = 1; // The display frequency, in minutes.
    localStorage.isInitialized = true; // The option initialization.
  }
  // Test for notification support.
  if (window.Notification) {
    // While activated, show notifications at the display frequency.
    //if (JSON.parse(localStorage.isActivated)) { show(); }
    //var interval = 0; // The display interval, in minutes.
    //setInterval(function() {
      //interval++;
      if (
        JSON.parse(localStorage.isActivated) //&& localStorage.frequency <= interval
      ) {
        var threshold = 0.5;
        var bad = [emotions[0], emotions[1], emotions[2], emotions[3], emotions[6], emotions[7]];
        for (i=0; i<bad.length, i++;) {
            if(bad[i]>threshold){
              show();
            }
        }
        interval = 0;
      }
   // }, 60000);
  }