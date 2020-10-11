const $preTag = document.querySelector("pre");

setTimeout(function () {
  $preTag.innerText = 10;
  setTimeout(function () {
    $preTag.innerText = 9;
    setTimeout(function () {
      $preTag.innerText = 8;
      setTimeout(function () {
        $preTag.innerText = 7;
        setTimeout(function () {
          $preTag.innerText = 6;
          setTimeout(function () {
            $preTag.innerText = 5;
            setTimeout(function () {
              $preTag.innerText = 4;
              setTimeout(function () {
                $preTag.innerText = 3;
                setTimeout(function () {
                  $preTag.innerText = 2;
                  setTimeout(function () {
                    $preTag.innerText = 1;
                    setTimeout(function () {
                      $preTag.innerText = "Happy Independence Day!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
