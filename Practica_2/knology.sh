########################    ROUTER 2 KNOLONY    ###############################
enable
CONFIGURE TERMINAL
interface gigabitEthernet 0/0
ip address 10.1.1.2 255.255.255.252 
no shutdown
exit

interface gigabitEthernet 0/1
ip address 10.1.2.1 255.255.255.252 
no shutdown
exit

INTERFACE SERIAL 0/3/1
ip address 10.1.7.1 255.255.255.255.252 
no shutdown
exit

router ospf 100
network 10.1.7.0 0.0.0.3 area 0
redistribute bgp 200 subnets
exit
router bgp 200
network 10.1.1.0 mask 255.255.255.252
network 10.1.2.0 mask 255.255.255.252
neighbor 10.1.1.1 remote-as 100
neighbor 10.1.2.2 remote-as 300
redistribute ospf 100 match internal
exit
copy running-config startup-config



########################    ROUTER 6    ###############################
enable
configure terminal
INTERFACE SERIAL 0/3/0
ip address 10.1.7.2 255.255.255.252 
no shutdown
exit

INTERFACE SERIAL 0/3/1
ip address 10.1.8.1 255.255.255.252 
no shutdown
exit

INTERFACE SERIAL 0/2/0
ip address 10.1.9.1 255.255.255.252 
no shutdown
exit

router ospf 100
network 10.1.7.0 0.0.0.3 area 0
redistribute eigrp 100 subnets
exit

router eigrp 100
network 10.1.8.0 0.0.0.3
network 10.1.9.0 0.0.0.3
redistribute ospf 100 metric 15 150 255 255 1500
exit

########################    ROUTER 7    ###############################
enable
configure terminal
INTERFACE SERIAL 0/3/0
ip address 10.1.8.2 255.255.255.252 
no shutdown
exit

interface gigabitEthernet 0/0
ip address 192.168.58.1 255.255.255.128
no shutdown
exit
interface gigabitEthernet 0/1
no shutdown
exit

router eigrp 100
network 10.1.8.0 0.0.0.3
network 192.168.58.0 0.0.0.127
exit

# SALUD
access-list 1 permit 192.168.58.128 0.0.0.127 # funcion publica
access-list 1 permit 192.168.28.0 0.0.0.127 # educacion
access-list 1 deny 192.168.28.128 0.0.0.127 # cultura y deportes
access-list 1 deny 192.168.88.0 0.0.0.127 # empresarial
access-list 1 deny 192.168.88.128 0.0.0.127 #economico

interface g0/0
ip access-group 1 out

########################    ROUTER 8    ###############################
enable
configure terminal
INTERFACE SERIAL 0/3/0
ip address 10.1.9.2 255.255.255.252 
no shutdown
exit

interface gigabitEthernet 0/0
ip address 192.168.58.129 255.255.255.128
no shutdown
exit
interface gigabitEthernet 0/1
no shutdown
exit

router eigrp 100
network 10.1.9.0 0.0.0.3
network 192.168.58.128 0.0.0.127
exit

# FUNCION PUBLICA
access-list 1 permit 192.168.28.0 0.0.0.127 # educacion
access-list 1 permit 192.168.28.128 0.0.0.127 # cultura y deportes
access-list 1 permit 192.168.58.0 0.0.0.127 # salud
access-list 1 deny 192.168.88.0 0.0.0.127 # empresarial
access-list 1 deny 192.168.88.128 0.0.0.127 #economico

interface g0/0
ip access-group 1 out