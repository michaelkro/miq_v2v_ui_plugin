import Immutable from 'seamless-immutable';

export const sourceClusters = Immutable({
  name: 'providers',
  count: 49,
  subcount: 8,
  subquery_count: 8,
  pages: 1,
  resources: [
    {
      href: 'http://localhost:3000/api/providers/10000000000012',
      id: '1',
      name: 'RHV-M',
      created_on: '2016-07-15T18:25:07Z',
      updated_on: '2017-11-21T23:03:49Z',
      guid: '74cbbbb8-4ab9-11e6-b213-005056b170bd',
      zone_id: '10000000000008',
      type: 'ManageIQ::Providers::Redhat::InfraManager',
      api_version: '3.6.9.2',
      uid_ems: null,
      host_default_vnc_port_start: null,
      host_default_vnc_port_end: null,
      provider_region: null,
      last_refresh_error: null,
      last_refresh_date: '2017-02-26T02:44:22Z',
      provider_id: null,
      realm: null,
      tenant_id: '10000000000001',
      project: null,
      parent_ems_id: null,
      subscription: null,
      last_metrics_error: null,
      last_metrics_update_date: null,
      last_metrics_success_date: null,
      tenant_mapping_enabled: null,
      enabled: true,
      options: {},
      emstype: 'rhevm',
      ems_clusters: [
        {
          href: 'http://localhost:3000/api/clusters/10000000000001',
          id: '1',
          name: 'VMWare Cluster1',
          ems_id: '10000000000012',
          created_on: '2016-07-15T18:28:16Z',
          updated_on: '2016-07-15T18:28:16Z',
          uid_ems: '00000002-0002-0002-0002-00000000024b',
          ha_enabled: null,
          ha_admit_control: null,
          ha_max_failures: null,
          drs_enabled: null,
          drs_automation_level: null,
          drs_migration_threshold: null,
          last_perf_capture_on: null,
          ems_ref_obj: '/api/clusters/00000002-0002-0002-0002-00000000024b',
          effective_cpu: null,
          effective_memory: null,
          ems_ref: '/api/clusters/00000002-0002-0002-0002-00000000024b',
          type: null
        },
        {
          href: 'http://localhost:3000/api/clusters/10000000000002',
          id: '2',
          name: 'VMWare Cluster2',
          ems_id: '10000000000012',
          created_on: '2016-07-15T18:28:16Z',
          updated_on: '2016-07-15T18:28:16Z',
          uid_ems: '00000002-0002-0002-0002-00000000024b',
          ha_enabled: null,
          ha_admit_control: null,
          ha_max_failures: null,
          drs_enabled: null,
          drs_automation_level: null,
          drs_migration_threshold: null,
          last_perf_capture_on: null,
          ems_ref_obj: '/api/clusters/00000002-0002-0002-0002-00000000024b',
          effective_cpu: null,
          effective_memory: null,
          ems_ref: '/api/clusters/00000002-0002-0002-0002-00000000024b',
          type: null
        },
        {
          href: 'http://localhost:3000/api/clusters/10000000000003',
          id: '3',
          name: 'VMWare Cluster3',
          ems_id: '10000000000012',
          created_on: '2016-07-15T18:28:16Z',
          updated_on: '2016-07-15T18:28:16Z',
          uid_ems: '00000002-0002-0002-0002-00000000024b',
          ha_enabled: null,
          ha_admit_control: null,
          ha_max_failures: null,
          drs_enabled: null,
          drs_automation_level: null,
          drs_migration_threshold: null,
          last_perf_capture_on: null,
          ems_ref_obj: '/api/clusters/00000002-0002-0002-0002-00000000024b',
          effective_cpu: null,
          effective_memory: null,
          ems_ref: '/api/clusters/00000002-0002-0002-0002-00000000024b',
          type: null
        }
      ]
    }
  ]
});

export const targetClusters = Immutable({
  name: 'providers',
  count: 49,
  subcount: 1,
  subquery_count: 1,
  pages: 1,
  resources: [
    {
      href: 'http://localhost:3000/api/providers/10000000000001',
      id: '10000000000001',
      name: 'vCenter',
      created_on: '2016-07-08T10:33:40Z',
      updated_on: '2017-02-26T03:18:27Z',
      guid: '700f10d8-44f7-11e6-8d89-005056b170bd',
      zone_id: '10000000000003',
      type: 'ManageIQ::Providers::Vmware::InfraManager',
      api_version: '6.0',
      uid_ems: '0302ea13-8681-4b48-9609-b4aea788ca63',
      host_default_vnc_port_start: null,
      host_default_vnc_port_end: null,
      provider_region: null,
      last_refresh_error: null,
      last_refresh_date: '2017-02-26T03:18:27Z',
      provider_id: null,
      realm: null,
      tenant_id: '10000000000001',
      project: null,
      parent_ems_id: null,
      subscription: null,
      last_metrics_error: null,
      last_metrics_update_date: null,
      last_metrics_success_date: null,
      tenant_mapping_enabled: null,
      enabled: true,
      options: null,
      emstype: 'vmwarews',
      ems_clusters: [
        {
          href: 'http://localhost:3000/api/clusters/10000000000006',
          id: '1',
          name: 'RHV Cluster1',
          ems_id: '10000000000007',
          created_on: '2016-08-03T02:19:35Z',
          updated_on: '2017-02-26T02:33:43Z',
          uid_ems: 'domain-c7',
          ha_enabled: false,
          ha_admit_control: true,
          ha_max_failures: 1,
          drs_enabled: false,
          drs_automation_level: 'fullyAutomated',
          drs_migration_threshold: 3,
          last_perf_capture_on: null,
          ems_ref_obj: 'domain-c7',
          effective_cpu: 109356,
          effective_memory: 789977235456,
          ems_ref: 'domain-c7',
          type: null
        },
        {
          href: 'http://localhost:3000/api/clusters/10000000000007',
          id: '2',
          name: 'RHV Cluster2',
          ems_id: '10000000000008',
          created_on: '2016-08-03T02:19:35Z',
          updated_on: '2017-02-26T02:33:43Z',
          uid_ems: 'domain-c7',
          ha_enabled: false,
          ha_admit_control: true,
          ha_max_failures: 1,
          drs_enabled: false,
          drs_automation_level: 'fullyAutomated',
          drs_migration_threshold: 3,
          last_perf_capture_on: null,
          ems_ref_obj: 'domain-c7',
          effective_cpu: 109356,
          effective_memory: 789977235456,
          ems_ref: 'domain-c7',
          type: null
        }
      ]
    }
  ]
});

export const requestSourceClustersData = {
  method: 'GET',
  fetchSourceClustersUrl: '/api/dummyProviders',
  response: { data: sourceClusters }
};

export const requestTargetClustersData = {
  method: 'GET',
  fetchTargetClustersUrl: '/api/dummyProviders',
  response: { data: targetClusters }
};

export const initialState = Immutable({
  sourceClusters: [],
  targetClusters: [],
  fetchSourceClustersUrl: requestSourceClustersData.fetchSourceClustersUrl,
  fetchTargetClustersUrl: requestTargetClustersData.fetchTargetClustersUrl
});
