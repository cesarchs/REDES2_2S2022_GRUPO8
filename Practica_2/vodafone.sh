
########################    ROUTER 1 VODAFONE    ###############################
enable
CONFIGURE TERMINAL
interface gigabitEthernet 0/0
ip address 10.1.1.1 255.255.255.252  
no shutdown
exit

INTERFACE SERIAL 0/3/0
ip address 10.1.3.2 255.255.255.252  
END

configure terminal
router ospf 100
network 10.1.3.0 0.0.0.3 area 0
redistribute bgp 100 subnets
exit
router bgp 100
network 10.1.1.0 mask 255.255.255.252
redistribute ospf 100 match internal
neighbor 10.1.1.2 remote-as 200

copy running-config startup-config

########################    ROUTER 3 votafone hub    ###############################
ENABLE 
CONFIGURE TERMINAL
INTERFACE SERIAL 0/0/0
ip address 10.1.3.1 255.255.255.252  
no shutdown
exit
INTERFACE SERIAL 0/2/0
ip address 10.1.4.1 255.255.255.252   
no shutdown
exit
INTERFACE SERIAL 0/3/1
ip address 10.1.5.1 255.255.255.252   
no shutdown
exit
INTERFACE SERIAL 0/3/0
ip address 10.1.6.1 255.255.255.252   
no shutdown
exit
END

configure terminal
router rip
version 2
network 10.1.4.0
network 10.1.6.0
redistribute ospf 100 metric 15 
no auto-summary
exit
router ospf 100 
network 10.1.3.0 0.0.0.3 area 0
redistribute rip subnets

copy running-config startup-config

########################    ROUTER 4 VODAFONE SPOKE 1    ###############################
ENABLE
CONFIGURE TERMINAL
INTERFACE SERIAL 0/3/0
IP ADDRESS 10.1.4.2 255.255.255.252 
NO SHUTDOWN
END

configure terminal
interface gigabitEthernet 0/0
ip address 192.168.28.1 255.255.255.128
no shutdown

configure terminal
router rip
version 2
network 10.1.4.0
network 192.168.28.0
no auto-summary
exit


# EDUCACION
access-list 1 permit 192.168.58.128 0.0.0.127 # funcion publica
access-list 1 permit 192.168.58.0 0.0.0.127 # salud
access-list 1 deny 192.168.28.128 0.0.0.127 # cultura y deportes
access-list 1 deny 192.168.88.0 0.0.0.127 # empresarial
access-list 1 deny 192.168.88.128 0.0.0.127 #economico

interface g0/0
ip access-group 1 out

copy running-config startup-config 

########################    ROUTER 5 VODAFONE SPOKE 2   ###############################
ENABLE
CONFIGURE TERMINAL
INTERFACE SERIAL 0/3/0
IP ADDRESS 10.1.6.2 255.255.255.252 
NO SHUTDOWN
END

configure terminal
interface gigabitEthernet 0/0
ip address 192.168.28.128 255.255.255.128
no shutdown

configure terminal
router rip
version 2
network 10.1.6.0
network 192.168.28.128
no auto-summary
exit

# CULTURA Y DEPORTE
access-list 1 permit 192.168.58.128 0.0.0.127 # funcion publica
access-list 1 deny 192.168.58.0 0.0.0.127 # salud
access-list 1 deny 192.168.28.0 0.0.0.127 # educacion
access-list 1 deny 192.168.88.0 0.0.0.127 # empresarial
access-list 1 deny 192.168.88.128 0.0.0.127 #economico

interface g0/0
ip access-group 1 out

copy running-config startup-config 

____________________________________________________________________________