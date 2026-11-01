/** Reviewed parameter candidate; synthetic assumptions, not mesh/physical safety acceptance. */
export const LAYOUT_VERSION="g2.1-layout-proposal-1";
function deepFreeze(x){if(x&&typeof x==='object'&&!Object.isFrozen(x)){for(const v of Object.values(x))deepFreeze(v);Object.freeze(x);}return x;}
export const CART_LAYOUT=deepFreeze({
  "version": "g2.1-layout-proposal-1",
  "restNodes": {"W1":"HB_W1","W2":"HB_W2"},
  "assumed": true,
  "homeNode": "CART_HOME",
  "accessNode": "HANDLE_ACCESS",
  "accessClearNode": "ACCESS_REAR",
  "homeHeading": 0,
  "palmRadius": 0.065,
  "operatorOffset": [
    0,
    0.95
  ],
  "homePosition": [
    -4,
    17
  ],
  "accessPosition": [
    -4,
    18.3
  ],
  "turnRadius": 1.6,
  "workerEnvelopeRadius": 0.55,
  "handleLocalWorld": [
    [
      -0.3,
      1.15,
      -0.55
    ],
    [
      0.3,
      1.15,
      -0.55
    ]
  ],
  "handleBar": {
    "axis": "localWorldX",
    "endpointsX": [
      -0.325,
      0.325
    ],
    "centerY": 1.15,
    "centerZ": -0.53,
    "radius": 0.02,
    "contactsMeaning": "rear cylinder surface at Z-.55, not axis center"
  },
  "bodyFootprint": {
    "width": 0.7,
    "length": 1.25
  },
  "maximumLoadFootprint": {
    "width": 0.55,
    "length": 1
  },
  "materialRackAnchorsCore": {
    "frame": [
      0,
      12.2
    ],
    "fork": [
      1.6,
      12.2
    ],
    "wheel": [
      3.2,
      12.2
    ],
    "drive": [
      4.8,
      12.2
    ],
    "fastener": [
      6.4,
      12.2
    ],
    "repair": [
      15,
      12.2
    ]
  },
  "materialRackFootprint": [
    1.345,
    0.505
  ],
  "bays": {
    "CART_HOME": {
      "center": [
        -4,
        17
      ],
      "capacity": 1,
      "sweepRadius": 1.6,
      "allowedHeadings": [
        0,
        1.5707963267948966,
        3.141592653589793,
        -1.5707963267948966
      ],
      "turnTie": "positivePi",
      "conflicts": [
        "cart:CART_HOME|CP",
        "human:ACCESS_REAR|HANDLE_ACCESS",
        "attachment:CART_HOME"
      ]
    },
    "CP": {
      "center": [
        3,
        17
      ],
      "capacity": 1,
      "sweepRadius": 1.6,
      "allowedHeadings": [
        0,
        1.5707963267948966,
        3.141592653589793,
        -1.5707963267948966
      ],
      "turnTie": "positivePi",
      "conflicts": [
        "cart:CART_HOME|CP",
        "cart:CP|CQ",
        "cart:C-P|CP"
      ]
    },
    "CQ": {
      "center": [
        15,
        17
      ],
      "capacity": 1,
      "sweepRadius": 1.6,
      "allowedHeadings": [
        0,
        1.5707963267948966,
        3.141592653589793,
        -1.5707963267948966
      ],
      "turnTie": "positivePi",
      "conflicts": [
        "cart:CP|CQ",
        "cart:C-Q|CQ"
      ]
    },
    "C-P": {
      "center": [
        3,
        14.5
      ],
      "capacity": 1,
      "sweepRadius": 1.6,
      "allowedHeadings": [
        0,
        1.5707963267948966,
        3.141592653589793,
        -1.5707963267948966
      ],
      "turnTie": "positivePi",
      "conflicts": [
        "cart:C-P|CP"
      ]
    },
    "C-Q": {
      "center": [
        15,
        14.5
      ],
      "capacity": 1,
      "sweepRadius": 1.6,
      "allowedHeadings": [
        0,
        1.5707963267948966,
        3.141592653589793,
        -1.5707963267948966
      ],
      "turnTie": "positivePi",
      "conflicts": [
        "cart:C-Q|CQ"
      ]
    }
  },
  "serviceNodes": {
    "P": "C-P",
    "Q": "C-Q"
  },
  "attachmentMs": 2000,
  "detachmentMs": 2000,
  "resourceProtocol": {
    "conservativeTripReservation": "atomically reserve complete cart roundtrip edges+bays+home attachment access before attaching; retain through detach; home occupancy belongs persistently to C1",
    "homeOccupancy": "entity C1 remains owner while parked; task receives subordinate use token, not second conflicting owner",
    "humanConflict": "only ACCESS_REAR|HANDLE_ACCESS conflicts with CART_HOME turn/attachment; reserve it before approach and retain until detach ends and operator clears the swept home disk",
    "clearanceRelease": "Keep home-turn and access lock until detached worker reaches ACCESS_REAR via recorded walking; HANDLE_ACCESS remains inside sweep disk.",
    "returnEgressTarget": [
      -6.3,
      18.3
    ],
    "noOpMutexRequired": "candidate separated envelope; still pending mesh sweep"
  }
});
const NETWORKS={
  "human": {
    "nodes": {
      "H0": [
        0,
        10
      ],
      "HB": [
        -3,
        10
      ],
      "HP": [
        3,
        10
      ],
      "HA": [
        9,
        10
      ],
      "HQ": [
        15,
        10
      ],
      "P-OP": [
        3,
        7.5
      ],
      "A-OP": [
        9,
        7.5
      ],
      "Q-OP": [
        15,
        7.5
      ],
      "ACCESS_WEST": [
        -6.3,
        10
      ],
      "ACCESS_REAR": [
        -6.3,
        18.3
      ],
      "HANDLE_ACCESS": [
        -4,
        18.3
      ],
      "PW": [
        3,
        11.2
      ],
      "AW": [
        9,
        11.2
      ],
      "QW": [
        15,
        11.2
      ],
      "HB_W1": [
        -3,
        8.8
      ],
      "HB_W2": [
        -3,
        11.2
      ]
    },
    "edges": [
      [
        "H0",
        "HB"
      ],
      [
        "H0",
        "HP"
      ],
      [
        "HP",
        "HA"
      ],
      [
        "HA",
        "HQ"
      ],
      [
        "HP",
        "P-OP"
      ],
      [
        "HA",
        "A-OP"
      ],
      [
        "HQ",
        "Q-OP"
      ],
      [
        "HB",
        "ACCESS_WEST"
      ],
      [
        "ACCESS_WEST",
        "ACCESS_REAR"
      ],
      [
        "ACCESS_REAR",
        "HANDLE_ACCESS"
      ],
      [
        "HP",
        "PW"
      ],
      [
        "HA",
        "AW"
      ],
      [
        "HQ",
        "QW"
      ],
      [
        "HB",
        "HB_W1"
      ],
      [
        "HB",
        "HB_W2"
      ]
    ],
    "ordinaryWorkerRadius": 0.55,
    "nodeCapacity": 1
  },
  "cart": {
    "nodes": {
      "CART_HOME": [
        -4,
        17
      ],
      "CP": [
        3,
        17
      ],
      "CQ": [
        15,
        17
      ],
      "C-P": [
        3,
        14.5
      ],
      "C-Q": [
        15,
        14.5
      ]
    },
    "edges": [
      [
        "CART_HOME",
        "CP"
      ],
      [
        "CP",
        "CQ"
      ],
      [
        "CP",
        "C-P"
      ],
      [
        "CQ",
        "C-Q"
      ]
    ],
    "eligibleWorkers": "one attached worker only; other worker never uses cart graph",
    "corridorSweepRadius": 1.6
  },
  "agv": {
    "nodes": {
      "V-HOME": [
        0,
        2
      ],
      "VP": [
        3,
        2
      ],
      "VA": [
        9,
        2
      ],
      "VQ": [
        15,
        2
      ],
      "VJ": [
        18,
        2
      ],
      "P-PORT": [
        3,
        4.5
      ],
      "A-PORT": [
        9,
        4.5
      ],
      "Q-PORT": [
        15,
        4.5
      ],
      "V-EXIT": [
        18,
        4.5
      ],
      "V-SCRAP": [
        18,
        0.5
      ]
    },
    "edges": [
      [
        "V-HOME",
        "VP"
      ],
      [
        "VP",
        "VA"
      ],
      [
        "VA",
        "VQ"
      ],
      [
        "VQ",
        "VJ"
      ],
      [
        "VP",
        "P-PORT"
      ],
      [
        "VA",
        "A-PORT"
      ],
      [
        "VQ",
        "Q-PORT"
      ],
      [
        "VJ",
        "V-EXIT"
      ],
      [
        "VJ",
        "V-SCRAP"
      ]
    ]
  }
};
export function makeMobilityNetworks(){return structuredClone(NETWORKS);}
