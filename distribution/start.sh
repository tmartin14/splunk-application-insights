# Make sure we have the logs directories created.  If not, create them
if [ ! -d "logs\apache" ]; then
  mkdir -p logs/{apache,tomcat,wildfly}
fi

# Run the docker swarm
docker-compose -f docker-compose-app-insights.yml -p ai up -d

echo waiting 45 seconds for the servers to start up......
sleep 45

#Open local pages for apache, tomcat & Splunk
echo Allow me to open web pages for Splunk, Tomcat and Apache...
open http://localhost:8085
open http://localhost:8080/travel
open http://localhost:8000/en-US/app/splunk_app_Application_Insights/oi3

#generate load (optional
./generate_load.sh

