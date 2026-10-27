// Derived from frame-factory-plan/frame-factory-config.json schema 1.0.0.
// Planning assumptions only; no physical process recipes.
export const DEFAULT_FRAME_CONFIG = {
  "schemaVersion": "1.0.0",
  "scenarioId": "FRAME-DEMO",
  "initialQuantity": 12,
  "qualityMode": "synthetic_pass",
  "qualityReviewSeconds": 2,
  "maxReworkCount": 3,
  "defaultRecipeId": "demo_6061_full_route_v1",
  "defaultKit": {
    "orderId": "FRAME-DEMO-ORDER",
    "frameSpecId": "DEMO-BIKE-FRAME",
    "sizeCode": "M",
    "drawingRevision": "DEMO-R1",
    "surfaceCondition": "bare_clean_dry",
    "recipeId": "demo_6061_full_route_v1",
    "recipeVersion": "demo-v1",
    "materialCompatibilityGroupId": "DEMO-6061",
    "tubeLotIds": [
      "DEMO-TUBE-001"
    ],
    "forgingLotIds": [
      "DEMO-FORGING-001"
    ],
    "fillerLotId": "DEMO-FILLER-001",
    "incomingTemperByComponent": {
      "tubes": "unverified_demo",
      "forgings": "unverified_demo"
    },
    "alignmentRequired": false,
    "alignmentReviewRef": null
  },
  "stations": [
    {
      "id": "F01",
      "name": "外購來料與齊套",
      "zoneId": "receiving",
      "operation": "support",
      "mode": "lot",
      "cycleSeconds": 8,
      "capacity": 8,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F02",
      "name": "裁切與管端配合",
      "zoneId": "cutting",
      "operation": "cutting",
      "mode": "single",
      "cycleSeconds": 12,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F03",
      "name": "除毛邊與焊前清潔",
      "zoneId": "clean_prep",
      "operation": "support",
      "mode": "single",
      "cycleSeconds": 8,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F04",
      "name": "酸洗／化學清洗前處理",
      "zoneId": "wet",
      "operation": "acid_cleaning",
      "mode": "batch",
      "cycleSeconds": 16,
      "capacity": 4,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F05",
      "name": "濕後清潔乾燥放行",
      "zoneId": "wet_transition",
      "operation": "support",
      "mode": "batch",
      "cycleSeconds": 10,
      "capacity": 4,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F06",
      "name": "夾治具、點固與焊接",
      "zoneId": "welding",
      "operation": "welding",
      "mode": "single",
      "cycleSeconds": 28,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F07",
      "name": "焊後品質檢查",
      "zoneId": "qa",
      "operation": "support",
      "mode": "single",
      "cycleSeconds": 8,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F08",
      "name": "幾何檢查",
      "zoneId": "metrology",
      "operation": "support",
      "mode": "single",
      "cycleSeconds": 8,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F09",
      "name": "校正",
      "zoneId": "metrology",
      "operation": "alignment",
      "mode": "single",
      "cycleSeconds": 10,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F10",
      "name": "熱處理",
      "zoneId": "thermal",
      "operation": "heat_treatment",
      "mode": "batch",
      "cycleSeconds": 45,
      "capacity": 4,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 45,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F11",
      "name": "受控打磨修整",
      "zoneId": "grinding",
      "operation": "grinding",
      "mode": "single",
      "cycleSeconds": 12,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F12",
      "name": "最終清潔與放行檢驗",
      "zoneId": "qa",
      "operation": "support",
      "mode": "single",
      "cycleSeconds": 10,
      "capacity": 1,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    },
    {
      "id": "F13",
      "name": "合格架庫與總裝交接",
      "zoneId": "handoff",
      "operation": "support",
      "mode": "transfer",
      "cycleSeconds": 6,
      "capacity": 8,
      "parallelResources": 1,
      "bufferCapacity": 32,
      "maxWaitSeconds": 12,
      "allowPartial": true,
      "productionCycleMinutes": null
    }
  ],
  "recipes": [
    {
      "id": "demo_6061_full_route_v1",
      "version": "demo-v1",
      "name": "6061 完整焊後熱處理概念（假設）",
      "enabledInDemo": true,
      "approvedForProduction": false,
      "materialCompatibilityGroups": [
        "DEMO-6061"
      ],
      "steps": [
        {
          "stepId": "r01",
          "stationId": "F01",
          "operationKey": "receive_and_kit"
        },
        {
          "stepId": "r02",
          "stationId": "F02",
          "operationKey": "cut"
        },
        {
          "stepId": "r03",
          "stationId": "F03",
          "operationKey": "deburr_clean"
        },
        {
          "stepId": "r04",
          "stationId": "F04",
          "operationKey": "approved_preweld_acid_clean"
        },
        {
          "stepId": "r05",
          "stationId": "F05",
          "operationKey": "rinse_dry_release"
        },
        {
          "stepId": "r06",
          "stationId": "F06",
          "operationKey": "fixture_tack_weld"
        },
        {
          "stepId": "r07",
          "stationId": "F07",
          "operationKey": "weld_inspect"
        },
        {
          "stepId": "r08",
          "stationId": "F08",
          "operationKey": "postweld_geometry"
        },
        {
          "stepId": "r09",
          "stationId": "F10",
          "operationKey": "solution_and_controlled_cooling",
          "batchStage": "solution_and_controlled_cooling",
          "nextState": "heat_processed_quality_hold",
          "releaseGate": "batch_records_accepted_then_required_geometry_accepted"
        },
        {
          "stepId": "r10",
          "stationId": "F08",
          "operationKey": "post_solution_geometry"
        },
        {
          "stepId": "r11",
          "stationId": "F09",
          "operationKey": "authorized_alignment_if_needed",
          "condition": "geometry_deviation_and_review_approved",
          "ifNotNeeded": "skip_alignment_but_retain_required_geometry_records"
        },
        {
          "stepId": "r12",
          "stationId": "F08",
          "operationKey": "post_alignment_geometry"
        },
        {
          "stepId": "r13",
          "stationId": "F10",
          "operationKey": "artificial_age",
          "batchStage": "artificial_age",
          "nextState": "heat_processed_quality_hold",
          "releaseGate": "batch_records_accepted_then_required_geometry_accepted"
        },
        {
          "stepId": "r14",
          "stationId": "F08",
          "operationKey": "post_age_geometry"
        },
        {
          "stepId": "r15",
          "stationId": "F11",
          "operationKey": "drawing_permitted_finish"
        },
        {
          "stepId": "r16",
          "stationId": "F12",
          "operationKey": "final_clean_and_release"
        },
        {
          "stepId": "r17",
          "stationId": "F13",
          "operationKey": "handoff"
        }
      ]
    },
    {
      "id": "supplier_7005_route_template_v1",
      "version": "demo-v1",
      "name": "7005 供應商時效路由範本",
      "enabledInDemo": false,
      "approvedForProduction": false,
      "materialCompatibilityGroups": [
        "DEMO-7005"
      ],
      "steps": [
        {
          "stepId": "r01",
          "stationId": "F01",
          "operationKey": "receive_and_kit"
        },
        {
          "stepId": "r02",
          "stationId": "F02",
          "operationKey": "cut"
        },
        {
          "stepId": "r03",
          "stationId": "F03",
          "operationKey": "deburr_clean"
        },
        {
          "stepId": "r04",
          "stationId": "F04",
          "operationKey": "approved_preweld_acid_clean"
        },
        {
          "stepId": "r05",
          "stationId": "F05",
          "operationKey": "rinse_dry_release"
        },
        {
          "stepId": "r06",
          "stationId": "F06",
          "operationKey": "fixture_tack_weld"
        },
        {
          "stepId": "r07",
          "stationId": "F07",
          "operationKey": "weld_inspect"
        },
        {
          "stepId": "r08",
          "stationId": "F08",
          "operationKey": "postweld_geometry"
        },
        {
          "stepId": "r09",
          "stationId": "F09",
          "operationKey": "authorized_alignment_if_needed",
          "condition": "geometry_deviation_and_review_approved",
          "ifNotNeeded": "skip_alignment_but_retain_required_geometry_records"
        },
        {
          "stepId": "r10",
          "stationId": "F08",
          "operationKey": "post_alignment_geometry"
        },
        {
          "stepId": "r11",
          "stationId": "F10",
          "operationKey": "supplier_approved_age",
          "batchStage": "supplier_approved_age",
          "nextState": "heat_processed_quality_hold",
          "releaseGate": "batch_records_accepted_then_required_geometry_accepted"
        },
        {
          "stepId": "r12",
          "stationId": "F08",
          "operationKey": "post_age_geometry"
        },
        {
          "stepId": "r13",
          "stationId": "F11",
          "operationKey": "drawing_permitted_finish"
        },
        {
          "stepId": "r14",
          "stationId": "F12",
          "operationKey": "final_clean_and_release"
        },
        {
          "stepId": "r15",
          "stationId": "F13",
          "operationKey": "handoff"
        }
      ]
    }
  ],
  "logistics": {
    "enabled": true,
    "fleet": 1,
    "batchSize": 4,
    "allowPartial": true,
    "maxWaitSeconds": 20,
    "travelSeconds": 35,
    "returnSeconds": 35,
    "loadSeconds": 5,
    "unloadSeconds": 5,
    "waypoints": [
      {
        "x": 56,
        "z": 3
      },
      {
        "x": 47,
        "z": 3
      },
      {
        "x": 47,
        "z": -4
      },
      {
        "x": 35,
        "z": -4
      }
    ],
    "speed": 0.8
  },
  "qualityOutcomes": {}
};
