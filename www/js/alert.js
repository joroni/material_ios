    app = { alertDialog: null };


    app.fromTemplate = function() {
      app.alertDialog.show();
    };

    app.close = function() {
      if(app.alertDialog && app.alertDialog.visible) {
        app.alertDialog.hide();
      }
    };

    app.alert = function() {
      ons.notification.alert('Hello, world!');
    };

    app.confirm = function() {
      ons.notification.confirm({
        message: 'Do you like ramen?',
        buttonLabels: ['Yes', 'No'],
        callback: function(i) {
          if (i==0) {
            ons.notification.alert('Me too!');
          } else {
            ons.notification.alert('That\'s too bad...');
          }
        }
      });
    };

    app.prompt = function() {
      var fn = function() {
        ons.notification.prompt({
          message: 'What is the meaning of Life, the Universe and Everything?',
          callback: function(answer) {
            if (answer === "42") {
              ons.notification.alert('That\'s the correct answer!');
            } else {
              ons.notification.alert({
                message: 'Incorrect! Please try again!',
                callback: fn
              });
            }
          }
        });
      };

      fn();
    };

    app.cancelable = function() {
      ons.notification.confirm({
        message: 'This dialog can be canceled by tapping the background or using the back button on your device.',
        cancelable: true,
        callback: function(i) {
          if (i == -1) {
            ons.notification.alert('You canceled it!');
          }
        }
      });
    };