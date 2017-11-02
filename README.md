# splunk-application-insights
Splunk Insights for Application Monitoring

This Splunk app is designed to provide visualizations and correlations for many of the technologies used in the delivery of software applications.  It supports technologies such as Load Balancers, Web Servers, Applications Servers, JMX data and log files.  The goal is to provide a single point of entry for an operations or application support team responsible for various technologies.

The application also provides a Triage dashboard to help identify potential problem issues and create a timeline of events that occured just prior in an efort to quickly determine root cause.  This dashboard requires the installation of the Timeline Custom Visualization which can be found here:  <a href="https://splunkbase.splunk.com/app/3120/">Timeline Custom Visualization</a>.   Once installed, configure it to be used for 'All Apps' and you should be all set.

### Sample Overview Dashboard
<img src="images/overview.png" alt="Overview Screenshot" />


### Sample Triage Dashboard
<img src="images/triage.png" alt="Triage Screenshot" />

