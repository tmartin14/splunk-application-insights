echo
echo Generating Load for Apache and Tomcat
echo

while true 
do
 echo Hitting Apache web server
 wget -q -O - \
         http://localhost:8085/ \
         http://localhost:8085/ \
         http://localhost:8085/ \
         http://localhost:8085/GiveMeA404Please \
    &> /dev/null
 
 echo Hitting Tomcat app server
 wget -q -O - \
         http://localhost:8080/ \
         http://localhost:8080/manager/html/list  \
         http://localhost:8080/manager/status  \
         http://localhost:8080/Oops  \
         http://localhost:8080/travel  \
         http://localhost:8080/travel/hotels/search  \
         "http://localhost:8080/travel/hotels?searchString=Ritz&slowDown=0&pageSize=5"  \
    &> /dev/null 

 echo Hitting Wildfly\(JBoss\) app server
 wget -q -O - \
         http://localhost:8081/ \
         http://localhost:8081/ \
         http://localhost:8081/ \
    &> /dev/null 

echo waiting for 60 seconds...
echo 
sleep 60
done

