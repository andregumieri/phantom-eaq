<?php
    date_default_timezone_set('America/Sao_Paulo');

    function doTest() {
        exec('phantomjs phantom-eaq.js', $console);
    }

    $testeNum = 1;
    do {
        echo "Teste #{$testeNum}... ";
        $ret = doTest();
        echo "done.\n";
        $testeNum++;
        sleep(180);
    } while(1==1);
?>
