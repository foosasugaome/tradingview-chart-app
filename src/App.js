import React, { useEffect } from 'react';
import { widget } from 'tradingview-widget';

function TradingViewChart() {
  useEffect(() => {
    const widgetOptions = {
      symbol: 'AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      container_id: 'tradingview-chart-container',
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed('<API_URL>'), // Replace <API_URL> with the URL for your data feed API
      library_path: '/charting_library/',
      theme: 'light',
      style: '1',
      drawings_access: { type: 'black', tools: [{ name: 'Regression Trend' }] },
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: ['study_templates'],
      charts_storage_url: 'http://saveload.tradingview.com',
      charts_storage_api_version: '1.1',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      fullscreen: false,
      autosize: true,
    };

    const tvWidget = new widget(widgetOptions);
    tvWidget.onChartReady(() => {
      // Chart is ready
    });

    return () => {
      // Clean up the chart widget
      tvWidget.remove();
    };
  }, []);

  return (
    <div id="tradingview-chart-container" style={{ width: '100%', height: '400px' }}></div>
  );
}

function App() {
  return (
    <div className="App">
      <TradingViewChart />
    </div>
  );
}

export default App;
