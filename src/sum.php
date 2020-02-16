<?php
  function sum_count($x, $y) {
    $max = max(strlen($x), strlen($y));
    
    $a = str_pad($x, $max, "0", STR_PAD_LEFT);
    $b = str_pad($y, $max, "0", STR_PAD_LEFT);

    $res = "";
    $n = 0;

    for ($i = $max - 1; $i >= 0; $i--) {
      $s = (int) $a[$i] + (int) $b[$i] + $n;
      $res = (string) ($s % 10) . $res;
      $n = floor($s / 10);
    }

    if ($n > 0) {
      $res = (string) $n . $res;
    }

    return $res;
  }
?>