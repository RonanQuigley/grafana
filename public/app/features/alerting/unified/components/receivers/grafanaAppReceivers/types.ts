import { SupportedPlugin } from '../../../types/pluginBridges';

export interface AmRouteReceiver {
  label: string;
  value: string;
  grafanaAppReceiverType?: SupportedPlugin;
}

export const GRAFANA_APP_RECEIVERS_SOURCE_IMAGE: Record<SupportedPlugin, string> = {
  [SupportedPlugin.OnCall]: 'public/img/alerting/oncall_logo.svg',

  [SupportedPlugin.Incident]: '',
  [SupportedPlugin.MachineLearning]: '',
  [SupportedPlugin.Labels]: '',
};
