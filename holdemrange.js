var _HR_HEIGHT = 13;
var _HR_WIDTH = 13;

function _hr_onClick(ele, arr) {
    var stry = ele.id.charAt(3);
    var strx = ele.id.charAt(4);

    if (arr[stry][strx] > 0) {
        arr[stry][strx] = 0;
        ele.className = 'hrcell';
    }
    else {
        arr[stry][strx] = 1;
        ele.className = 'hrcell1';
    }
}

function initHoldemRange(id, arr) {
    if (arr == undefined) {
        arr = [];
        for (var y = 0; y < _HR_HEIGHT; ++y) {
            arr.push([]);

            for (var x = 0; x < _HR_WIDTH; ++x) {
                arr[y].push(0);
            }
        }
    }

    var hr = document.getElementById(id);
    var str = '<div class="hrscene">';
    var cellstr = 'AKQJT98765432';

    for (var y = 0; y < _HR_HEIGHT; ++y) {
        str += '<div class="hrline">';

        for (var x = 0; x < _HR_WIDTH; ++x) {
            var ccstr = '';
            ccstr += cellstr.charAt(y);
            ccstr += cellstr.charAt(x);

            if (x < y) {
                ccstr += 'o';
            }
            else if (x > y) {
                ccstr += 's';
            }

            var cn = 'hrc' + y + x;

            if (arr[y][x] > 0) {
                str += '<div class="hrcell1" id="' + cn + '">' + ccstr + '</div>';
            }
            else {
                str += '<div class="hrcell" id="' + cn + '">' + ccstr + '</div>';
            }
        }

        str += '</div>';
    }

    str += '</div>';

    hr.innerHTML = str;

    for (var y = 0; y < _HR_HEIGHT; ++y) {
        for (var x = 0; x < _HR_WIDTH; ++x) {
            var cn = 'hrc' + y + x;
            var hrc = document.getElementById(cn);
            hrc.addEventListener('click', function (event) {
                _hr_onClick(event.target, arr);
            });
        }
    }

    return arr;
}