# Metal<sup>3</sup> Mock Website

<p align="center">
<img src="./assets/logo.png" width="100%" height="100%"/>
</p>

### Get Started with Metal Kubed

[Get Started](https://metal3.io/try-it.html)

### Check Out the User Guide

[User Guide](https://book.metal3.io/introduction.html)

# What is Metal<sup>3</sup>?

<p align="center">
<img src="./assets/second.png" width="100%" height="100%"/>
</p>

# Metal<sup>3</sup> Components

| S.No. | Name                      |
| ----- | ------------------------- |
| 1     | BareMetal Actuator        |
| 2     | BareMetal Operator        |
| 3     | BareMetal Management Pods |

See more about Metal<sup>3</sup> Components [here](https://metal3.io/documentation.html).

# FAQs

```
Why Metal3.io?


There are a number of great open source tools for bare metal host provisioning, including Ironic. Metal3.io aims to build on these technologies to provide a Kubernetes native API for managing bare metal hosts via a provisioning stack that is also running on Kubernetes.

We believe that Kubernetes Native Infrastructure, or managing your infrastructure just like your applications, is a powerful next step in the evolution of infrastructure management.

The Metal3.io project is also building integration with the Kubernetes cluster-api project, allowing Metal3.io to be used as an infrastructure backend for Machine objects from the Cluster API.
```

```
What is the baremetal operator?


It’s the operator in charge of definitions of physical hosts, containing information about how to reach the Out of Band management controller, URL of image to provision, plus other properties related with hosts being used for provisioning instances.
```

```
What is IPMI?


IPMI is the acronym for Intelligent Platform Management Interface which is used to monitor hardware health (fans, voltage, temperature, etc).

It was created by a joint effort by several manufactures. It allows to also define boot order and power status of the hardware.
```

```
What is out-of-band management controller?


Enterprise hardware usually have an integrated or optional controller that allows to reach the server even if it’s powered down, either via dedicated or shared nic.

This controller allows some checks on the server hardware and also perform some settings like changing power status, changing Boot Order, etc.

The Baremetal Operator uses it to power on, reboot and provision the physical servers to be used for running workloads on top.
```

```
What is an operator?


An Operator is a method of packaging, deploying and managing a Kubernetes application.

A Kubernetes application is an application that is both deployed on Kubernetes and managed using the Kubernetes APIs and kubectl tooling. You can think of Operators as the runtime that manages this type of application on Kubernetes.
```

# Other Links

[Official Website](https://metal3.io/)
<br>
[Official Documentation](https://metal3.io/documentation.html)
<br>
[Twitter](https://twitter.com/metal3_io)
<br>
[Slack](https://kubernetes.slack.com/messages/CHD49TLE7)
<br>
[GitHub Repository](https://github.com/metal3-io)
<br>
[Official Documentation](https://metal3.io/documentation.html)
<br>
[YouTube](https://www.youtube.com/channel/UC_xneeYbo-Dl4g-U78xW15g/videos)
