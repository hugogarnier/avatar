import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Hand1 = ({
  color = "black",
  className,
  style,
}: LayerProps): ReactElement => {
  const dimensions = { width: 1744, height: 1204 };

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 1744 1204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M1344.83 1191.5C1344.83 1168.75 1331.19 1090.14 1338.41 1064.85C1345.71 1039.3 1377.8 996.48 1373.8 922.871C1371.17 874.371 1358.4 840.01 1325.46 816.723C1305.88 802.879 1275.47 780.834 1253.33 790.677C1231.18 800.52 1184.43 821.026 1184.43 821.026L1157.85 845.526C1157.85 845.526 1204.01 855.331 1223.76 845.526C1256.91 829.071 1297.98 853.041 1297.98 853.041C1297.98 853.041 1195.21 853.784 1170.61 882.841C1158.28 897.4 1154.56 921.881 1159.78 932.314C1165 942.747 1170.08 963.743 1175.69 969.352C1192.81 986.472 1216.7 975.513 1202.29 998.565C1192.89 1013.61 1239.77 1015.71 1216.38 1043.95C1202.56 1060.63 1228.71 1077.06 1232.5 1088.21C1240.94 1113.02 1214.7 1191.5 1214.7 1191.5L1344.83 1191.5Z"
        fill="white"
      />
      <path
        d="M1335.05 813.361C1336.72 788.045 1356.12 548.853 1338.4 546.786C1320.68 544.719 1161.07 556.286 1154.54 554.61C1148 552.934 1144.48 760.828 1146.15 796.595C1147.83 832.362 1148.39 880.424 1148.39 880.424L1165.71 886.571C1165.71 886.571 1223.83 863.658 1240.04 863.658C1256.25 863.658 1293.69 854.716 1293.69 854.716L1335.05 813.361Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1334.69 1194.06C1337.32 1175.26 1335.43 1156.55 1333.54 1137.88C1332.73 1129.9 1331.92 1121.92 1331.47 1113.95C1331.43 1113.23 1331.39 1112.51 1331.34 1111.79L1331.26 1110.39C1329.7 1083.44 1328.2 1057.5 1344.97 1033.06C1353.64 1020.41 1355.67 1004.93 1357.66 989.695C1358.29 984.877 1358.91 980.083 1359.75 975.412C1367.47 932.066 1366.18 889.087 1346.12 848.229C1341.22 838.234 1332.77 832.785 1324.36 827.357C1321.53 825.535 1318.71 823.716 1316.03 821.729C1310.79 817.838 1304.99 814.707 1299.18 811.574L1299.18 811.574C1294.14 808.853 1289.09 806.131 1284.4 802.907C1274.17 795.87 1264.39 795.801 1253.38 800.329C1247.86 802.599 1242.28 804.73 1236.7 806.861L1236.7 806.862C1218.16 813.942 1199.63 821.018 1183.43 833.151C1182.61 833.761 1181.76 834.315 1180.9 834.869C1178.29 836.562 1175.68 838.251 1174.28 841.515C1191.8 845.479 1208.35 840.722 1224.39 836.047C1254.19 827.364 1281.23 830.069 1305.65 850.356C1309.76 853.77 1311.65 857.223 1309.84 861.98C1272.17 865.462 1234.93 869.406 1198.31 877.887C1184.99 880.971 1164.82 902.987 1164.11 916.511C1163.6 926.134 1171.02 925.499 1176.48 923.13C1205.58 910.514 1236.34 908.869 1267.13 907.222L1267.14 907.221C1271.44 906.991 1275.73 906.762 1280.02 906.502C1286.13 906.132 1291.94 907.568 1297.72 908.999L1297.72 908.999L1297.73 908.999C1299.35 909.401 1300.97 909.803 1302.6 910.164C1306.53 911.034 1311.1 912.445 1311.48 918.709C1306.41 923.049 1300.36 922.402 1294.53 921.778C1292.59 921.57 1290.67 921.365 1288.82 921.347C1273.4 921.197 1258.19 923.189 1242.99 925.181H1242.99C1231.31 926.711 1219.63 928.241 1207.85 928.8C1199.73 929.186 1191.5 932.632 1183.83 935.9C1178 938.386 1172.46 942.587 1174.41 950.6C1177.08 961.63 1183.94 969.049 1195.34 969.926C1208.05 970.903 1221.1 971.869 1233.61 970.074C1255.3 966.961 1276.83 968.258 1298.38 969.556L1298.38 969.556C1304.38 969.917 1310.39 970.279 1316.4 970.545C1317.02 970.573 1317.69 970.55 1318.39 970.527C1321.59 970.422 1325.18 970.303 1325.36 974.972C1325.6 980.945 1319.91 981.17 1316.1 981.32L1316.03 981.323C1314.46 981.383 1312.89 981.443 1311.32 981.504L1311.27 981.506C1292.9 982.213 1274.51 982.921 1256.16 982.523C1238.07 982.123 1222.05 985.491 1207.34 1001.16C1215.78 1003.88 1223.3 1008.25 1230.68 1012.55C1244.26 1020.45 1257.38 1028.09 1274.94 1024.62C1275.5 1024.52 1276.11 1024.38 1276.77 1024.24C1282.46 1022.98 1291.21 1021.05 1291.91 1029.36C1292.54 1036.85 1285.15 1037.06 1279.26 1037.23C1277.99 1037.26 1276.79 1037.3 1275.76 1037.4C1259.81 1039 1243.7 1038.92 1229.1 1030.35C1217.99 1048.42 1219.8 1063.07 1234.11 1077.94C1242.43 1086.57 1243.94 1097.87 1241.83 1108.98C1236.64 1136.27 1230.64 1163.4 1224.43 1191.44L1224.43 1191.44L1224.05 1193.18C1219.15 1193.94 1214.2 1194.24 1209.25 1194.08C1210.92 1184.99 1212.79 1175.93 1214.66 1166.86C1219.1 1145.33 1223.55 1123.74 1225.41 1101.66C1225.94 1095.4 1223.71 1090.73 1219.66 1085.59C1207.07 1069.57 1202.22 1051.71 1211.74 1032.17C1215.04 1025.39 1215.2 1020.5 1207.04 1016.91C1189.68 1009.27 1188.3 1003.36 1200.19 985.355C1184.69 984.203 1170.92 976.655 1167.1 963.66C1165.28 957.467 1162.67 951.491 1160.06 945.512C1154.94 933.795 1149.82 922.066 1150.61 908.673C1150.65 907.966 1150.81 907.127 1150.96 906.295C1151.27 904.633 1151.58 902.998 1150.96 902.503C1138.68 892.72 1139.27 879.492 1139.83 866.81C1139.99 863.186 1140.15 859.606 1140.01 856.164C1138.21 812.942 1138.56 769.633 1140.16 726.331C1140.91 706.223 1141.02 686.091 1141.14 665.959C1141.26 645.827 1141.37 625.696 1142.12 605.587L1142.18 603.966C1142.73 589.198 1143.28 574.425 1143.12 559.67C1143.02 550.137 1147.75 546.098 1156.04 546.019C1180.91 545.784 1205.74 544.478 1230.57 543.173C1263.95 541.418 1297.33 539.664 1330.8 540.509C1345.53 540.881 1347.06 544.029 1347.87 558.94C1349.12 581.81 1349.14 604.614 1348.5 627.457C1348.41 630.615 1348.32 633.773 1348.23 636.931L1348.23 636.933C1347.67 657.122 1347.1 677.313 1346.18 697.487C1344.33 737.837 1344.46 778.204 1344.92 818.566C1345 826.102 1349.44 831.553 1353.92 837.053C1356.49 840.209 1359.08 843.381 1360.86 846.974C1377.16 879.812 1380.6 914.404 1376.8 949.786C1376.45 953.09 1376.11 956.397 1375.76 959.705C1373.59 980.766 1371.4 1001.87 1365.82 1022.64C1363.52 1031.16 1359.36 1038.19 1355.21 1045.22L1355.21 1045.22C1353.67 1047.84 1352.12 1050.45 1350.67 1053.14C1346.68 1060.59 1344.57 1068.9 1344.53 1077.36C1343.8 1102.63 1345.95 1127.71 1348.11 1152.81L1348.11 1152.81C1348.53 1157.7 1348.95 1162.59 1349.34 1167.48C1349.85 1173.73 1349.63 1180.03 1349.39 1186.87C1349.32 1188.84 1349.25 1190.85 1349.2 1192.92C1344.56 1194.06 1340.17 1194.06 1334.69 1194.06ZM1318.86 794.4C1322.2 791.461 1324.63 787.729 1324.71 783.386C1324.94 771.002 1326.53 758.756 1328.11 746.504C1329.71 734.112 1331.32 721.714 1331.52 709.16C1331.96 682.334 1332.89 655.517 1333.81 628.7L1333.81 628.694C1334.31 614.283 1334.81 599.872 1335.23 585.46L1335.25 584.741C1335.88 563.233 1336.04 558.063 1307.15 557.539C1286.48 557.164 1265.81 558.046 1245.13 558.928L1245.13 558.928C1223.02 559.871 1200.9 560.814 1178.75 560.223C1177.27 560.184 1175.79 560.549 1174.3 560.916C1173.28 561.165 1172.27 561.414 1171.25 561.539C1161.54 562.731 1157.25 568.157 1157.34 577.932C1157.38 582.209 1157.45 586.489 1157.52 590.77L1157.52 590.771C1157.76 605.597 1158 620.435 1157.06 635.191C1154.36 677.579 1153.33 720.019 1153.07 762.446C1152.97 779.678 1156.48 796.999 1162.07 813.561C1164.29 820.136 1169.39 824.754 1175.59 819.546C1189.35 807.996 1205.57 801.807 1221.78 795.617C1227.27 793.523 1232.75 791.429 1238.14 789.128C1257.14 781.018 1276.39 777.519 1294.51 790.77C1301.77 796.077 1308.8 797.788 1318.86 794.4ZM1227.06 850.742C1233.28 849.214 1239.5 847.686 1245.75 846.511V846.513C1248.62 846.752 1251.29 846.381 1253.83 846.027C1258.51 845.376 1262.76 844.785 1267.07 848.184C1260.63 853.596 1253.19 853.892 1245.89 854.184C1242.47 854.32 1239.09 854.455 1235.85 855.109C1230.03 856.284 1224.16 857.246 1218.3 858.207C1203.75 860.591 1189.21 862.974 1175.38 868.609C1170.95 870.416 1166.73 871.742 1162.04 868.924C1157.41 866.141 1157.35 862.164 1158.41 857.852C1159.39 853.865 1161.95 852.432 1166.1 853.77C1187.12 860.555 1207.09 855.649 1227.06 850.742Z"
        fill={color}
      />
      <path
        d="M1382.33 427.62C1371.96 435.577 1367.96 447.541 1359.69 456.02C1356.05 459.744 1352 464.196 1346.54 460.943C1340.6 457.404 1341.84 450.543 1344.45 446.099C1350.41 435.952 1358.05 426.612 1368.14 420.389C1374.29 416.6 1381.69 415.623 1382.33 427.62Z"
        fill={color}
      />
      <path
        d="M1262.81 411.367C1261.57 405.033 1259.09 398.352 1266.5 396.459C1273.34 394.71 1278.57 400.129 1279.36 406.079C1280.93 417.979 1284.86 429.079 1288.09 440.457C1289.05 443.834 1290.38 448.275 1285.07 450.08C1280.24 451.72 1277.27 448.112 1275.92 445.051C1271.2 434.352 1267.33 423.279 1262.81 411.367Z"
        fill={color}
      />
      <path
        d="M1448.69 597.688C1452.46 604.157 1462.36 609.697 1454.98 616.415C1448.25 622.541 1442.53 613.315 1437.07 609.559C1431.91 606.005 1427.55 601.306 1422.45 597.648C1416.89 593.654 1415.6 588.563 1419.54 583.588C1423.26 578.897 1428.64 579.797 1433.05 583.522C1438.19 587.866 1443.08 592.5 1448.69 597.688Z"
        fill={color}
      />
      <path
        d="M1432.06 547.346C1425.37 546.461 1420.05 543.938 1420.98 537.313C1421.82 531.34 1427.46 530.165 1432.98 530.161C1444.41 530.155 1455.92 529.827 1463.92 540.74C1455.72 555.321 1443.5 547.583 1432.06 547.346Z"
        fill={color}
      />
      <path
        d="M1300.87 623.78C1289.82 617.687 1285.17 605.035 1290.11 595.789C1292.93 590.24 1299.12 587.278 1305.21 588.57C1311.6 590.061 1317.62 594.048 1318.9 601.951C1320.69 612.995 1314.02 621.722 1300.87 623.78Z"
        fill={color}
      />
    </svg>
  );
};